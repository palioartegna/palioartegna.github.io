import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../main/sidenav.service';

@Component({
  selector: 'dmd-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
})
export class MainNavbarComponent implements OnInit {
  constructor(public sidenavService: SidenavService) {}

  ngOnInit(): void {}
}
