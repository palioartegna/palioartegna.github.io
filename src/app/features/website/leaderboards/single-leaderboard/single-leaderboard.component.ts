import {Component, Input, OnInit, Pipe} from '@angular/core';
import {Leaderboard} from "../leaderboard";


let colors:any = {
  "Salt": "rgba(0,60,255,0.50)",
  "Sotcjiscjel": "rgba(255,221,0,0.50)",
  "Vile": "rgba(0,0,0,0.50)",
  "Somont": "rgba(37,195,0,0.50)",
  "Surnins": "rgba(255,0,0,0.50)",
}

@Pipe(
  {
    standalone: true,
    name: "decorateParticipants"
  }
)
export class DecorateParticipantsPipe {
  transform(participants: { player: string, points: number; jolly?:boolean }[]) {
    return participants.map((participant, index) => {
      return {
        ...participant,
        rank: index + 1
      }
    });
  }
}


@Component({
  selector: 'single-leaderboard',
  templateUrl: './single-leaderboard.component.html',
  styleUrl: './single-leaderboard.component.scss'
})
export class SingleLeaderboardComponent implements OnInit {
  ngOnInit(): void {
    console.log("Leaderboard", this.leaderboard)
  }

  @Input() leaderboard!: Leaderboard


  protected readonly colors = colors;
}

