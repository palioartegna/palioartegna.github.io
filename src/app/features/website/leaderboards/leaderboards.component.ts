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

  mainLeaderboard: Leaderboard = new Leaderboard((<any>scores)['global'])
  ngOnInit(): void {
  }



  protected readonly scores = scores;
  protected readonly Leaderboard = Leaderboard;
  public readonly colors = colors;
}

