import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toast } from '../toast.service';

@Component({
   selector: 'pb-toast',
   templateUrl: './toast.component.html',
   styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
   @Input() toast!: Toast;
   @Output() close: EventEmitter<any> = new EventEmitter<any>();

   constructor() {}

   ngOnInit(): void {}
}
