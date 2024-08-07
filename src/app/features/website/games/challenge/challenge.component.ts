import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import * as scores from '../../../../../assets/data/scores.json';
import {Leaderboard} from "../../leaderboards/leaderboard";
import {colors} from "../../../../utils"
import {KeyValuePipe} from "@angular/common";

class ChallengeGame{
  name!: string;
  scores!: any;
  leaderboard!: Leaderboard;

  constructor(name: string, scores: any, leaderboard: any){
    this.name = name;
    this.scores = scores;
    this.leaderboard = Leaderboard.fromScores(leaderboard);
  }

}

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [
    KeyValuePipe
  ],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent {
  activatedRoute = inject(ActivatedRoute)
  game!: ChallengeGame;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let game = (<any>scores)['game-scores'][params['gameName']]
      this.game = new ChallengeGame(params['gameName'], game['scores'], game['leaderboard']);
    })
  }
  protected readonly Leaderboard = Leaderboard;
  protected readonly colors = colors;
  protected readonly scores = scores;
}
