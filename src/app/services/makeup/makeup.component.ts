import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'sm-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['../services.component.scss', './makeup.component.scss'],
})
export class MakeupComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  constructor() {}

  ngOnInit(): void {}

  selectTab(tabId: number, event) {
    event.preventDefault();
    this.staticTabs.tabs[tabId].active = true;
  }
}
