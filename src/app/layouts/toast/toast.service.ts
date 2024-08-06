import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export class Toast {
   message: string;
   type: string;
   title: string;
   timeout: number;
   close: Subject<void> = new Subject<void>();

   constructor(message: string, type: string, title: string, timeout: number) {
      this.message = message;
      this.type = type;
      this.title = title;
      this.timeout = timeout;
      if (timeout > 0)
         setTimeout(() => {
            this.close.next();
         }, timeout);
   }
}

@Injectable({ providedIn: 'root' })
export class ToastService {
   toasts$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

   addToast(title: string, message: string, type: string, timeout: number = 5000): void {
      console.log('ToastService: ' + message + ' ' + type + ' ' + title);
      const toast = new Toast(message, type, title, timeout);
      toast.close.subscribe(() => {
         this.removeToast(toast);
      });
      const toasts = this.toasts$.getValue();
      toasts.push(toast);
      this.toasts$.next(toasts);
   }

   removeToast(toast: Toast): void {
      const toasts = this.toasts$.getValue();
      const index = toasts.indexOf(toast);
      if (index !== -1) {
         toasts.splice(index, 1);
         this.toasts$.next(toasts);
      }
   }
}
