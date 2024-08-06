import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../footers/footer/footer.component';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private footerToggleSubject = new BehaviorSubject<boolean>(true);

  private _component: any = FooterComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        this.setFooterComponent();
      }
    });

  }

  public get component(): any {
    return this._component;
  }

  public get footerToggle$(): any {
    return this.footerToggleSubject.asObservable();
  }

  show(): void {
    this.footerToggleSubject.next(true);
  }

  hide(): void {
    this.footerToggleSubject.next(false);
  }

  toggle(value?: boolean): void {
    this.footerToggleSubject.next(value ?? !this.footerToggleSubject.value);
  }

  private getFooterComponent(routeSnapshot: any, defaultFooter: any = null): any {
    const component: any = routeSnapshot.data['footer'] || defaultFooter;
    defaultFooter = component === 'none' ? null : defaultFooter;
    if (routeSnapshot.firstChild) {
      return this.getFooterComponent(routeSnapshot.firstChild, defaultFooter) || component;
    }
    return component;
  }

  private setFooterComponent(): void {
    this._component = this.getFooterComponent(this.route.snapshot);
    if (this._component == null || this._component === 'none') {
      this.footerToggleSubject.next(!!this._component);
      return;
    }

  }
}
