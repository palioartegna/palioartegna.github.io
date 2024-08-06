import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dmd-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  activeButton: any = {
    name: 'sidenav.buttons.home',
  };

  constructor( private router: Router) {
    const url = this.router.url.slice(1);
  }
}
