import { Directive, ElementRef, TemplateRef } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { scaleIn, scaleOut } from '../animations';

@Directive({ selector: '[pbCarouselItem]' })
export class CarouselItemDirective {
  constructor(public el: ElementRef, private animationBuilder: AnimationBuilder, public templateRef: TemplateRef<any>) {}

  show(show: boolean): any {
    const metadata = show ? scaleIn : scaleOut;
    const factory = this.animationBuilder.build(metadata);
    const player = factory.create(this.el.nativeElement, { params: { time: '1000ms' } });
    player.play();
    return player;
  }
}
