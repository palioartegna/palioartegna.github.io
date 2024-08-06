import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[pbHost]',
})
export class HostDirective {
  @Input() position: any;

  constructor(public vcr: ViewContainerRef) {}
}
