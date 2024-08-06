import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {MainComponent} from './layouts/main/main.component';
import {AppRoutingModule} from "./app-routing.module";
import {ToastComponent} from "./layouts/toast/toast/toast.component";
import {FooterComponent} from "./layouts/footers/footer/footer.component";
import {MainNavbarComponent} from "./layouts/navbars/main-navbar/main-navbar.component";
import {MainSidenavComponent} from "./layouts/sidenavs/main-sidenav/main-sidenav.component";
import {LoginComponent} from "./login/login/login.component";
import {CommonModule} from "@angular/common";
import {WebsiteModule} from "./features/website/website.module";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [Title, {provide: LOCALE_ID, useValue: 'it'}],
  declarations: [
    MainComponent,
    ToastComponent,
    FooterComponent,
    MainNavbarComponent,
    LoginComponent,
    MainSidenavComponent
  ],
  bootstrap: [MainComponent],
})
export class AppModule {
  constructor() {
  }
}
