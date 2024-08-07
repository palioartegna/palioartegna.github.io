import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {GamesComponent} from "./games/games.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {LeaderboardsComponent} from "./leaderboards/leaderboards.component";

export const routes: Routes = [
  {
    path: '',
    data: {
      // sidenav: 'none',
    },

    component: LeaderboardsComponent,
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games-routing.module').then(m => m.GamesRoutingModule)
  },
  {
    path: 'leaderboard',
    component: LeaderboardsComponent
  },
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
