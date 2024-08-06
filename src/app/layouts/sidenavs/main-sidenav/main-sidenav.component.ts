import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SidenavService} from "../../main/sidenav.service";

@Component({
   selector: 'dmd-sidenav',
   templateUrl: './main-sidenav.component.html',
   styleUrls: ['./main-sidenav.component.scss'],
})
export class MainSidenavComponent implements OnInit, AfterViewInit {

   show = false;



   constructor(
      router: Router,
      public sideNavService: SidenavService,
   ) {
      const url = router.url.slice(1);
   }

   toggleSidenav(): void {
      this.show = !this.show;
   }

   ngOnInit(): void {}

   ngAfterViewInit(): void {}

}
