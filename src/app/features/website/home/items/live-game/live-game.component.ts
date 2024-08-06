import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-live-game',
  templateUrl: './live-game.component.html',
  styleUrl: './live-game.component.scss'
})
export class LiveGameComponent {
  @Input() gameId: string = ''
  game= {
    name: 'Calcio',
  }


}
