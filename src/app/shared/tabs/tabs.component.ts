import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pb-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Output() activeTabChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  _activeTab = 0;

  constructor() {}

  get activeTab(): number {
    return this._activeTab;
  }

  @Input() set activeTab(activeTab: number) {
    this._activeTab = activeTab;
    this.activeTabChange.emit(this._activeTab);
  }

  ngOnInit(): void {}
}
