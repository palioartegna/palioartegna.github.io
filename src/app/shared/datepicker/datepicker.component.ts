import { Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { pbDatePipe } from '../pipes/date-pipe/date.pipe';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
   selector: 'pb-datepicker',
   templateUrl: './datepicker.component.html',
   styleUrls: ['./datepicker.component.scss'],
   providers: [
      {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => DatepickerComponent),
         multi: true,
      },
   ],
})
export class DatepickerComponent implements OnInit, ControlValueAccessor, OnDestroy {
   @ViewChild('panel') panel: ElementRef | undefined;
   @ViewChild('input') input: ElementRef | undefined;

   @Input() formGroup: FormGroup | undefined;

   inputFocus = false;
   @Input() placeholder!: string;
   @Input() range = false;
   disabled!: boolean;
   days: Date[] = [];
   minutes: any = Array.from({ length: 12 }, (_, i) => i * 5);
   @Output() startDateChange: EventEmitter<Date> = new EventEmitter<Date>();
   @Output() endDateChange: EventEmitter<Date> = new EventEmitter<Date>();

   _startDate: Date | undefined;
   _endDate: Date | undefined;
   _viewDate: Date = new Date();
   _date!: Date;

   private onChange!: (value: any) => void;
   private onTouched!: () => void;

   constructor() {
      this.viewDate = new Date(new Date());
      this.generateDaysInMonth();
   }

   get startDate(): Date | undefined {
      return this._startDate;
   }

   @Input() set startDate(date: Date | undefined) {
      if (date) {
         this._startDate = new Date(
            date?.getFullYear(),
            date?.getMonth(),
            date?.getDate(),
            this._startDate ? 0 : isNaN(this._startDate!.getHours()) ? 0 : this._startDate!.getHours(),
            this._startDate ? 0 : isNaN(this._startDate!.getMinutes()) ? 0 : this._startDate!.getMinutes(),
            this._startDate ? 0 : isNaN(this._startDate!.getSeconds()) ? 0 : this._startDate!.getSeconds(),
            this._startDate ? 0 : isNaN(this._startDate!.getMilliseconds()) ? 0 : this._startDate!.getMilliseconds()
         );
      } else this._startDate = undefined;
      console.log(this.startDate, date);
      this.startDateChange.emit(this._startDate);
   }

   get endDate(): Date | undefined {
      return this._endDate;
   }

   @Input() set endDate(Date: Date | undefined) {
      this._endDate = Date;
      this.endDateChange.emit(this._endDate);
   }

   get viewDate(): Date {
      return this._viewDate;
   }

   set viewDate(date: Date) {
      this._viewDate = date;
      this.generateDaysInMonth();
   }

   // Nuovo metodo per controllare se una data è la data di inizio del range
   isStartDate(day: Date): undefined | boolean {
      return this.startDate && this.startDate.getTime() === day.getTime();
   }

   // Nuovo metodo per controllare se una data è la data di fine del range
   // isEndDate(day: Date): undefined | boolean {
   //   return this.endDate && this.endDate.getTime() === day.getTime();
   // }

   // Nuovo metodo per gestire la selezione della data nel range
   // selectDate(day: Date): void {
   //   if (!this.startDate || (this.startDate && this.endDate)) {
   //     // Se la data di inizio non è impostata o entrambe le date sono già selezionate, imposta la data di inizio
   //     this.startDate = day;
   //     this.endDate = undefined;
   //   } else if (day >= this.startDate) {
   //     // Se la data selezionata è successiva o uguale alla data di inizio, imposta la data di fine
   //     this.endDate = day;
   //   } else {
   //     // Se la data selezionata è precedente alla data di inizio, mantieni la data di inizio e reimposta la data di fine
   //     this.endDate = undefined;
   //   }
   // }

   selectDate(day: Date): void {
      if (this.allowDate(day)) {
         this.startDate = day;
         this.endDate = undefined;
         this.onChange(this.startDate);
         this.onTouched();
         this.inputFocus = false;
      }
   }

   @Input() allowDate: (date: Date) => boolean = () => true;

   nextMonth(): void {
      this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 1);
      this.generateDaysInMonth();
   }

   prevMonth(): void {
      this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() - 1, 1);
      this.generateDaysInMonth();
   }

   getSelectedMonthName(): string {
      return pbDatePipe.transform(this.viewDate, 'MMMM');
   }

   generateDaysInMonth(): void {
      const month = this.viewDate.getMonth();
      const year = this.viewDate.getFullYear();
      // add all days of the month
      this.days = Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, i) => new Date(year, month, i + 1));
      const firstDay = new Date(year, month, 1).getDay();
      const lastDay = new Date(year, month + 1, 0).getDay();
      const daysBefore = [...Array(firstDay - 1 >= 0 ? firstDay - 1 : 6).keys()].map(i => new Date(year, month, -i));
      const daysAfter = [...Array(7 - lastDay === 7 ? 0 : 7 - lastDay).keys()].map(i => new Date(year, month + 1, i + 1));
      this.days = [...daysBefore.reverse(), ...this.days, ...daysAfter];
   }

   ngOnInit(): void {}

   registerOnChange(fn: any): void {
      this.onChange = fn;
   }

   registerOnTouched(fn: any): void {
      this.onTouched = fn;
   }

   setDisabledState(isDisabled: boolean): void {
      this.disabled = isDisabled;
   }

   writeValue(obj: any): void {
      this._startDate = new Date(obj);
   }

   @HostListener('document:click', ['$event'])
   clickOut(event: any): void {
      this.inputFocus = !!(this.panel?.nativeElement.contains(event.target) || this.input?.nativeElement.contains(event.target));
   }

   ngOnDestroy(): void {}
}
