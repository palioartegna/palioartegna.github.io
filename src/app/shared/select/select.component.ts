import { Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { StringTransform } from '../utils';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
   selector: 'pb-select',
   templateUrl: './select.component.html',
   styleUrls: ['./select.component.scss'],
   providers: [
      {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => SelectComponent),
         multi: true,
      },
   ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
   inputFocus = false;
   @Output() termChange: EventEmitter<any> = new EventEmitter<any>();
   @Input() placeholder = '';
   @Input() transform: StringTransform = { callbackFn: item => item };
   @Input() disabled = false;
   @Input() readonly = false;
   _selected?: any;
   @Input() set selected(value: any) {
      this._selected = value;
      this.updateTerm();
   }
   get selected(): any {
      return this._selected;
   }
   @Output() selectedChange: EventEmitter<any> = new EventEmitter<any>();
   @Input() multiple = false;

   _items: any[] = [];

   _term = '';


   constructor(private eRef: ElementRef) {}

   get items(): any[] {
      return this._items;
   }

   @Input() set items(items: any[]) {
      this._items = items;
   }

   get term(): string {
      return this._term;
   }

   @Input() set term(value: string) {
      this._term = value;
      this.termChange.emit(this._term);
   }

   onChange: (value: any) => void = () => {};

   onTouched: () => void = () => {};

   updateTerm(): void {
      if (this.multiple) {
         this.term = this.selected.length > 0 ? this.selected.map((i: any) => this.transform.callbackFn(i)).join(', ') : '';
      } else {
         this.term = this.transform.callbackFn(this.selected);
      }
   }

   selectItem(item: any): void {
      console.log('in-select: ', item);
      this.onTouched();
      if (this.multiple) {
         this.selected = Array.isArray(this.selected) ? this.selected : this.selected ? [this.selected] : [];
         this.selected = this.selected?.includes(item) ? this.selected?.filter((i: any) => i !== item) : [...this.selected, item];
      } else {
         this.selected = item;
      }
      this.updateTerm();
      console.log(this.selected);
      this.selectedChange.emit(this.selected);
      this.onChange(this.selected);
   }

   test(): void {
      console.log('in-click');
   }

   ngOnInit(): void {
      this.inputFocus = false;
   }

   @HostListener('document:click', ['$event'])
   clickOut(event: any): void {
      this.inputFocus = !!this.eRef.nativeElement.contains(event.target);
   }

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
      this.selected = obj;
      this._term = this.transform.callbackFn(obj);
   }

   log(item: any): void {
      console.log(item);
   }
}
