import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {GamesComponent} from "./games/games.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {LeaderboardsComponent} from "./leaderboards/leaderboards.component";

export const routes: Routes = [
  {
    path: '',
    data: {
      sidenav: 'none',
    },

    component: LeaderboardsComponent,
  },
  // {
  //   path: 'games',
  //   component: GamesComponent
  // },
  // {
  //   path: 'leaderboard',
  //   component: LeaderboardsComponent
  // },
  // {
  //   'path': 'calendar',
  //   component: CalendarComponent
  // }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {
}
