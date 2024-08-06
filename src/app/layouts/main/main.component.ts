import { AfterViewInit, Component, ComponentRef, HostListener, OnInit, Renderer2, RendererFactory2, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';

import { NavbarService } from './navbar.service';
import { SidenavService } from './sidenav.service';
import { HostDirective } from '../../shared/directives/host-directive/host.directive';
import { FooterService } from './footer.service';
import { Toast, ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, AfterViewInit {
  navbarComponentRef: ComponentRef<any> | null = null;
  footerComponentRef: ComponentRef<any> | null = null;

  contentHeight!: number;

  toasts: Toast[] = [];

  constructor(
    protected sideNavService: SidenavService,
    private router: Router,
    public navbarService: NavbarService,
    private footerService: FooterService,
    public toastService: ToastService,
  ) {
    this.toastService.toasts$.subscribe((toasts: Toast[]) => {
      this.toasts = toasts;
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    // try to log in automatically

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateTitle();
      }
    });

    this.contentHeight = this.getContentHeight();
  }

  getContentHeight(): number {
    let contentHeight = window.innerHeight - (this.navbarComponentRef?.location.nativeElement.offsetHeight ?? 0);
    contentHeight -= this.footerComponentRef?.location.nativeElement.offsetHeight ?? 0;
    return contentHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.contentHeight = this.getContentHeight();
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
    const title: string = routeSnapshot.data['pageTitle'] ?? '';
    if (routeSnapshot.firstChild) {
      return this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  private updateTitle(): void {
    let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
    if (!pageTitle) {
      pageTitle = 'global.title';
    }
  }
}
