import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
   selector: 'pb-input',
   templateUrl: './input.component.html',
   styleUrls: ['./input.component.scss'],
   providers: [
      {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => InputComponent),
         multi: true,
      },
   ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
   @Input() label = '';
   @Input() placeholder = '';
   @Input() type = 'text';
   @Input() disabled = false;
   @Input() required = false;
   @Input() readonly = false;
   @Input() inputType: string = 'text';
   @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
   @Output() myBlur: EventEmitter<any> = new EventEmitter<any>();
   @Output() myFocus: EventEmitter<any> = new EventEmitter<any>();
   @Output() myKeyup: EventEmitter<any> = new EventEmitter<any>();
   @Output() myKeydown: EventEmitter<any> = new EventEmitter<any>();
   @Output() myKeypress: EventEmitter<any> = new EventEmitter<any>();

   private _value: any = '';

   constructor(public eRef: ElementRef) {}

   get value(): any {
      return this._value;
   }

   @Input() set value(value: any) {
      this._value = value;
      this.valueChange.emit(this._value);
      this.onChange(this._value);
      this.onTouched();
   }

   public onChange = (value: any): void => {};

   public onTouched = (): void => {};

   ngOnInit(): void {}

   writeValue(obj: any): void {
      this.value = obj;
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

   onFieldChange() {}
}
