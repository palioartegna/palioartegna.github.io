import {Component, OnInit} from '@angular/core';
import * as scores from '../../../../assets/data/scores.json';
import {Leaderboard} from "./leaderboard";



let colors:any = {
  "Salt": "rgba(0,60,255,0.50)",
  "Sotcjiscjel": "rgba(255,221,0,0.50)",
  "Vile": "rgba(0,0,0,0.50)",
  "Somont": "rgba(37,195,0,0.50)",
  "Surnins": "rgba(255,0,0,0.50)",
}

@Component({
  selector: 'app-leaderboard',

  templateUrl: './leaderboards.component.html',
  styleUrl: './leaderboards.component.scss'
})
export class LeaderboardsComponent implements OnInit{

  selectedLeaderboard:Leaderboard|null = Leaderboard.fromScores(scores['global']);
  // selectedLeaderboard:Leaderboard|null = null
  ngOnInit(): void {
    for(let game of this.games){

    }
  }

  get gameScores () {return scores['game-scores'] as any}
  games = Object.keys(this.gameScores);

  tab = 'global'


  protected readonly scores = scores;
  protected readonly Leaderboard = Leaderboard;
  protected readonly colors = colors;
}

