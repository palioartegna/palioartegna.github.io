import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[pbCarouselArrow]' })
export class CarouselArrowDirective {
  @Input() direction!: 'left' | 'right';

  constructor(public el: ElementRef) {}
}
