import {Component, Type} from '@angular/core';
import {NewsComponent} from "./items/news/news.component";
import {LiveGameComponent} from "./items/live-game/live-game.component";
import {StateComponent} from "./items/state/state.component";

@Component({
  selector: 'app-website',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  components: { component: Type<any>, data: any}[] = [
    {
      component: LiveGameComponent,
      data: {
        gameId: 'Calcio'
      }
    },
    {
      component: NewsComponent,
      data: {
        title: 'Home'
      }
    },

    {
      component: StateComponent,
      data: {
        title: 'Live Game'
      }
    }
  ]
  currentLeader = {
    name: 'Villa',
    points: 129,
    image: 'panda.svg',
    gameScores: [
      {
        game: 'Calcio',
        rank: 1,
        jolly: false
      },
      {
        game: 'Pallavolo',
        rank: 3,
        jolly: false
      },
      {
        game: 'Staffetta',
        rank: 1,
        jolly: true
      },
      {
        game: 'Morra',
        rank: 2,
        jolly: false
      },
      {
        game: 'Corsa coi sacchi',
        rank: 5,
        jolly: false
      }
    ]

  }



  constructor() {
  }

}
