import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./website/home/home.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./website/website-routing.module`).then(m => m.WebsiteRoutingModule),

  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class FeaturesRoutingModule{}
