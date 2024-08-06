import {
   AfterViewInit,
   ChangeDetectionStrategy,
   Component,
   ElementRef,
   EventEmitter,
   Input,
   OnDestroy,
   Output,
   ViewChild,
} from '@angular/core';

@Component({
   selector: 'pb-callout',
   templateUrl: './callout.component.html',
   styleUrls: ['./callout.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalloutComponent implements AfterViewInit, OnDestroy {
   @ViewChild('appDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
   @ViewChild('triangle', { static: true }) triangle!: ElementRef<HTMLDialogElement>;
   @ViewChild('content', { static: true }) content!: ElementRef;
   @Output() close: EventEmitter<any> = new EventEmitter<any>();
   @Input() callerRef?: HTMLElement;
   triangleColor = 'white';
   position = 'left';

   open = false;

   constructor() {}

   ngOnDestroy(): void {
      this.closeDialog();
   }

   closeDialog(): void {
      this.close.emit();
   }

   ngAfterViewInit(): void {
      if (!this.callerRef) {
         this.dialog.nativeElement.style.left = window.innerWidth / 2 - this.content.nativeElement.offsetWidth / 2 + 'px';
         this.dialog.nativeElement.style.top = window.innerHeight / 2 - this.content.nativeElement.offsetHeight / 2 + 'px';
         return;
      }

      let leftSpace = this.callerRef.getBoundingClientRect().left;
      let rightSpace = window.innerWidth - this.callerRef.getBoundingClientRect().right;
      let topSpace = this.callerRef.getBoundingClientRect().top;
      let bottomSpace = window.innerHeight - this.callerRef.getBoundingClientRect().top;

      let position = [
         { position: 'left', space: leftSpace - this.content.nativeElement.offsetWidth },
         { position: 'right', space: rightSpace - this.content.nativeElement.offsetWidth },
         { position: 'top', space: topSpace - this.content.nativeElement.offsetHeight },
         { position: 'bottom', space: bottomSpace - this.content.nativeElement.offsetHeight },
      ];
      position = position.sort((a, b) => b.space - a.space);

      switch (position[0].position) {
         case 'left':
            this.dialog.nativeElement.style.left =
               this.callerRef.getBoundingClientRect().left - this.content.nativeElement.offsetWidth - 10 + 'px';
            this.dialog.nativeElement.style.top =
               this.callerRef.getBoundingClientRect().top -
               this.content.nativeElement.offsetHeight / 2 +
               this.callerRef.offsetHeight / 2 +
               'px';
            break;
         case 'right':
            this.dialog.nativeElement.style.left = this.callerRef.getBoundingClientRect().right + 10 + 'px';
            this.dialog.nativeElement.style.top =
               this.callerRef.getBoundingClientRect().top -
               this.content.nativeElement.offsetHeight / 2 +
               this.callerRef.offsetHeight / 2 +
               'px';

            break;
         case 'top':
            this.dialog.nativeElement.style.top =
               this.callerRef.getBoundingClientRect().top - this.content.nativeElement.offsetHeight - 10 + 'px';
            this.dialog.nativeElement.style.left =
               this.callerRef.getBoundingClientRect().left -
               this.content.nativeElement.offsetWidth / 2 +
               this.callerRef.offsetWidth / 2 +
               'px';
            break;
         case 'bottom':
            this.dialog.nativeElement.style.top = this.callerRef.getBoundingClientRect().bottom + 10 + 'px';
            this.dialog.nativeElement.style.left =
               this.callerRef.getBoundingClientRect().left -
               this.content.nativeElement.offsetWidth / 2 +
               this.callerRef.offsetWidth / 2 +
               'px';
            break;
         default:
            break;
      }
   }
}
