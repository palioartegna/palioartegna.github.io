import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pbAnimate]',
})
export class AnimateDirective {
  @Input() duration = 500;
  @Input() attribute = 'animate';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.el.nativeElement.setAttribute('data-' + this.attribute, true);
    setTimeout(() => {
      this.el.nativeElement.setAttribute('data-' + this.attribute, false);
    }, this.duration);
  }
}
