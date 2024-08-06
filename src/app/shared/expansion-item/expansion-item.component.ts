import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pb-expansion-item',
  templateUrl: './expansion-item.component.html',
  styleUrls: ['./expansion-item.component.scss'],
})
export class ExpansionItemComponent implements OnInit {
  expanded = false;

  @Input() reversed = false;
  @Input() class = '';

  constructor() {}

  toggle(): void {
    this.expanded = !this.expanded;
  }

  ngOnInit(): void {}
}
