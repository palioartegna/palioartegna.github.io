import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {GamesComponent} from "./games.component";
import {TournamentComponent} from "./tournament/tournament.component";
import {ChallengeComponent} from "./challenge/challenge.component";


const routes: Route[] = [
  {
    path: '',
    component: GamesComponent,
  },
  {
    path: 'tournament/:gameName',
    component: TournamentComponent,
  },
  {
    path: 'challenge/:gameName',
    component: ChallengeComponent,
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class GamesRoutingModule {
}
