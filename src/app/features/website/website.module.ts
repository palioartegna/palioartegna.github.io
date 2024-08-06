import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LeaderboardsComponent} from "./leaderboards/leaderboards.component";
import {GamesComponent} from "./games/games.component";
import {HomeComponent} from "./home/home.component";
import {WebsiteRoutingModule} from "./website-routing.module";
import {NgOptimizedImage} from "@angular/common";
import {NewsComponent} from "./home/items/news/news.component";
import {StateComponent} from "./home/items/state/state.component";
import {LiveGameComponent} from "./home/items/live-game/live-game.component";
import {
    DecorateParticipantsPipe,
    SingleLeaderboardComponent
} from "./leaderboards/single-leaderboard/single-leaderboard.component";


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        WebsiteRoutingModule,
        NgOptimizedImage,
        DecorateParticipantsPipe,
    ],
  providers: [Title, {provide: LOCALE_ID, useValue: 'it'}],
  declarations: [
    LeaderboardsComponent,
    GamesComponent,
    HomeComponent,
    NewsComponent,
    StateComponent,
    LiveGameComponent,
    SingleLeaderboardComponent
  ],
})
export class WebsiteModule {
  constructor() {
  }
}
