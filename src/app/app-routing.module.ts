import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login/login.component";


@NgModule({
  imports: [
    RouterModule.forRoot([
      // {
      //   path: 'login',
      //   data: {
      //     navbar: 'none',
      //     sidenav: 'none',
      //   },
      //   component: LoginComponent,
      // },
      {
        path: '',
        data: {
          // navbar: 'none',
        },
        loadChildren: () => import(`./features/features-routing.module`).then(m => m.FeaturesRoutingModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule{}
