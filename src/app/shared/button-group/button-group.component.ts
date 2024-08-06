import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StringTransform } from '../utils';

@Component({
  selector: 'pb-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonGroupComponent),
      multi: true,
    },
  ],
})
export class ButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() buttons: any[] = [];
  @Output() selectedChange = new EventEmitter<any>();
  @Input() transform: StringTransform = { callbackFn: (value: any) => value };

  _selected!: any;

  constructor() {}

  get selected(): any {
    return this._selected;
  }

  @Input() set selected(value: any) {
    this.onTouched();
    this._selected = value;
    this.onChange(value);
    this.selectedChange.emit(value);
  }

  onChange: (value: any) => void = () => {};

  onTouched: () => void = () => {};

  ngOnInit(): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.buttons.forEach((button: any) => (button.disabled = isDisabled));
  }

  writeValue(obj: any): void {
    this._selected = obj;
  }
}
