import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute,} from "@angular/router";
import * as scores from '../../../../../assets/data/scores.json';
import {Leaderboard} from "../../leaderboards/leaderboard";
import {colors} from "../../../../utils";


class TournamentGame {
  name!: string;
  rounds!: { players: string[], scores: number[] }[];
  leaderboard!: Leaderboard;

  constructor(name: string, rounds: any, leaderboard?: any) {
    this.name = name;
    this.rounds = rounds;
    if (leaderboard)
      this.leaderboard = Leaderboard.fromScores(leaderboard);
  }

}

@Component({
  selector: 'app-tournament',
  standalone: true,
  imports: [],
  templateUrl: './tournament.component.html',
  styleUrl: './tournament.component.scss'
})
export class TournamentComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute)
  game!: TournamentGame;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let game = (<any>scores)['game-scores'][params['gameName']]
      this.game = new TournamentGame(params['gameName'], game['rounds'], game['leaderboard']);
      console.log(this.game)
    })
  }


  protected readonly colors = colors;
}
