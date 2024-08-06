

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Transform } from '../../shared/utils';
import { MainSidenavComponent } from '../sidenavs/main-sidenav/main-sidenav.component';


@Injectable({
   providedIn: 'root',
})
export class SidenavService {
   public _component: any = null;
   public _enabled = true;
   public _mode: 'side' | 'over' | 'push' = 'over';
   private sidenavToggleSubject = new BehaviorSubject<boolean>(false);

   constructor(
      private router: Router,
      private route: ActivatedRoute,
   ) {
      this.router.events.subscribe(event => {
         if (event.constructor.name === 'NavigationEnd') {
            this.setSidenavComponent();
         }
      });
   }

   public get component(): any {
      return this._component;
   }

   public get sidenavToggle$(): any {
      return this.sidenavToggleSubject.asObservable();
   }

   public get enabled(): boolean {
      return this.sidenavToggleSubject.value;
   }

   toggle(value?: boolean): void {
      if ((this.sidenavToggleSubject.value && value === this.sidenavToggleSubject.value) || !this._enabled) {
         return;
      }
      this.sidenavToggleSubject.next(value ?? !this.sidenavToggleSubject.value);
   }

   close(): void {
      if (this._enabled) {
         this.toggle(false);
      }
   }

   open(): void {
      if (this._enabled) {
         this.toggle(true);
      }
   }

   private getSidenavComponent(routeSnapshot: ActivatedRouteSnapshot, defaultSidenav: any = MainSidenavComponent): string {
      const component: any = routeSnapshot.data['sidenav'] || defaultSidenav;
      defaultSidenav = component === 'none' ? null : defaultSidenav;
      if (routeSnapshot.firstChild) {
         return this.getSidenavComponent(routeSnapshot.firstChild, defaultSidenav) || component;
      }
      return component;
   }

   private setSidenavComponent(): void {
      this._component = this.getSidenavComponent(this.route.snapshot);
      if (this._component == null || this._component === 'none') {
        this._component = null
         this.sidenavToggleSubject.next(!!this._component);
         return;
      }
   }
}
