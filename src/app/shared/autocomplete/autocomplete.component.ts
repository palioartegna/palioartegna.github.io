import { Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { StringTransform } from '../utils';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
   selector: 'pb-autocomplete',
   templateUrl: './autocomplete.component.html',
   styleUrls: ['./autocomplete.component.scss'],

   providers: [
      {
         provide: NG_VALUE_ACCESSOR,

         useExisting: forwardRef(() => AutocompleteComponent),
         multi: true,
      },
   ],
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {
   inputFocus = false;
   @Output() termChange: EventEmitter<any> = new EventEmitter<any>();
   @Input() placeholder = '';
   @Input() transformSelected: StringTransform = { callbackFn: item => item };
   @Input() transformItems: StringTransform = { callbackFn: item => item };
   @Input() disabled = false;
   _selected: any;
   get selected(): any {
      return this._selected;
   }
   @Input() set selected(item: any) {
      this._selected = item;
      this._term = this.transformSelected.callbackFn(item);
   }
   @Input() label = '';
   @Output() selectedChange: EventEmitter<any> = new EventEmitter<any>();

   _items: any[] = [];

   _term = '';

   constructor(private eRef: ElementRef) {}

   onChange = (value: any): void => {};
   onTouched = (): void => {};

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

   @Input() set formControl(formControl: FormControl) {
      this.selected = formControl.value;
   }

   selectItem(item: any): void {
      this.selected = item;
      this.onChange(item);
      this.onTouched();
   }

   ngOnInit(): void {
      this.inputFocus = false;
   }

   @HostListener('document:click', ['$event'])
   clickOut(event: any): void {
      this.inputFocus = !!this.eRef.nativeElement.contains(event.target);
   }

   writeValue(obj: any): void {
      this.selected = obj;
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

   triggerClick(): void {
      this.eRef.nativeElement.querySelector('input').click();
   }
}
