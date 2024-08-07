import {Component} from '@angular/core';
import {Leaderboard} from "../leaderboards/leaderboard";
import * as scores from '../../../../assets/data/scores.json';
import {colors} from "../../../utils"

class Game{
  name!: string;
  type!: string;
  leaderboard?: Leaderboard;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {


  getLeaderboard (game: string) {
    if(!this.gameScores[game]['leaderboard']) return undefined;
    return Leaderboard.fromScores(this.gameScores[game]['leaderboard'])
  }

  get gameScores () {return scores['game-scores'] as any}
  games = Object.keys(this.gameScores);

  tab = 'global'

  protected readonly Leaderboard = Leaderboard;
  protected readonly colors = colors;
}
