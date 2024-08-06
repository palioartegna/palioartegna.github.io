import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { MainNavbarComponent } from '../navbars/main-navbar/main-navbar.component';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private _component: any = MainNavbarComponent;
  private navbarToggleSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        this.setNavbarComponent();
      }
    });
  }

  public get component(): any {
    return this._component;
  }

  public get navbarToggle$(): any {
    return this.navbarToggleSubject.asObservable();
  }

  get enabled(){
    return this.navbarToggleSubject.value;
  }

  private getNavbarComponent(routeSnapshot: any, defaultNavbar: any = MainNavbarComponent): any {
    const component: any = routeSnapshot.data['navbar'] || defaultNavbar;
    defaultNavbar = component === 'none' ? null : defaultNavbar;
    if (routeSnapshot.firstChild) {
      return this.getNavbarComponent(routeSnapshot.firstChild, defaultNavbar) || component;
    }
    return component;
  }

  private setNavbarComponent(): void {
    this._component = this.getNavbarComponent(this.route.snapshot);
    if (this._component == null || this._component === 'none') {
      this._component = undefined;
      this.navbarToggleSubject.next(false);
      return;
    }
  }
}
