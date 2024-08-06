import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss'
})
export class StateComponent {
  @Input() title: string = 'State'

}
