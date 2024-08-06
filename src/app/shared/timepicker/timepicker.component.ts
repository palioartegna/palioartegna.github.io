import { Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
   selector: 'pb-timepicker',
   templateUrl: './timepicker.component.html',
   styleUrls: ['./timepicker.component.scss'],
   providers: [
      {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => TimepickerComponent),
         multi: true,
      },
   ],
})
export class TimepickerComponent implements OnInit, ControlValueAccessor {
   inputFocus = false;
   selectedMinute = 0;
   @ViewChild('selectTimeInput') selectTimeInput!: ElementRef;
   @ViewChild('panel') panel: ElementRef | undefined;
   @Input() time: Date = new Date();
   _duration = 5;
   get duration(): number {
      return this._duration;
   }
   @Input() set duration(duration: number) {
      this._duration = duration;
      this.durationChange.emit(duration);
   }
   @Output() durationChange: EventEmitter<number> = new EventEmitter<number>();
   disabled = false;

   selectedPeriod: string | null = null;
   selectedHour: number | null = null;
   currentStep: 'hours' | 'minutes' = 'hours';
   public mostraLinea = false;
   public posizioneLinea = 0;
   durations: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
   selectedDuration = 5; // Durata di default
   selectedNumbers: number[] = [];
   onChange = (value: any) => {};
   onTouched = () => {};

   writeValue(obj: any): void {
      this.time = obj;
   }
   registerOnChange(fn: any): void {
      this.onChange = fn;
   }
   registerOnTouched(fn: any): void {
      this.onTouched = fn;
   }
   setDisabledState?(isDisabled: boolean): void {
      this.disabled = isDisabled;
   }

   constructor() {}

   selectedHourClick(hour: number): void {
      this.selectedHour = hour;
      this.selectedNumbers = [hour];
      this.posizioneLinea = hour;
      this.mostraLinea = true;
      this.time.setHours(hour);
      this.onChange(this.time);
      this.onTouched();
   }

   handleWheel(event: WheelEvent, property: string): void {
      event.preventDefault();
      const delta = Math.sign(event.deltaY); //in base allo scorrimento del mouse
      if (property === 'selectedDuration') {
         const currentIndex = this.durations.indexOf(this.duration);
         const newIndex = currentIndex + delta;
         if (newIndex >= 0 && newIndex < this.durations.length) {
            this.duration = this.durations[newIndex];
         }
      }
   }

   decrementDuration(): void {
      if (this.duration > 5) {
         this.duration -= 5;
      }
   }

   incrementDuration(): void {
      if (this.duration < 55) {
         this.duration += 5;
      }
   }

   nextStep(step: 'hours' | 'minutes'): void {
      this.currentStep = step;
      this.inputFocus = true;
   }
   selectedMinuteClick(minute: number): void {
      this.time.setMinutes(minute);
      this.onChange(this.time);
      this.onTouched();
   }

   @HostListener('document:click', ['$event'])
   clickOut(event: any): void {
      this.inputFocus = !!(this.panel?.nativeElement.contains(event.target) || this.selectTimeInput?.nativeElement.contains(event.target));
   }

   ngOnInit(): void {}

   goToHours() {
      this.nextStep('hours');
   }

   goToMinutes() {
      this.nextStep('minutes');
   }

   confermaOra() {
      this.inputFocus = false;
   }
}
