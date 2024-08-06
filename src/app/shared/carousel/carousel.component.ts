import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { CarouselItemDirective } from './carousel-item-directive/carousel-item.directive';

@Component({
  selector: 'pb-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) carouselItems!: QueryList<CarouselItemDirective>;
  @ViewChild('instantiatedComponent', {
    read: ViewContainerRef,
    static: true,
  })
  instantiatedComponent!: ViewContainerRef;
  @ViewChild('content', { read: ViewContainerRef, static: true }) content!: ViewContainerRef;
  currentIndex = 0;
  isOpen = true;

  constructor(private cdr: ChangeDetectorRef) {}

  incrementIndex(): void {
    this.carouselItems.get(this.currentIndex)?.show(false);
    // this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    // this.instantiatedComponent.clear();
    // this.carouselItems.get(this.currentIndex)?.show(true);
    // this.instantiatedComponent.createEmbeddedView(this.carouselItems.get(this.currentIndex)!.templateRef);
  }

  decrementIndex(): void {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  ngAfterViewInit(): void {
    this.instantiatedComponent.createEmbeddedView(this.carouselItems.first.templateRef);
    this.cdr.detectChanges();
  }
}
