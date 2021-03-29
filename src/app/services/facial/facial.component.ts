import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'sm-facial',
  templateUrl: './facial.component.html',
  styleUrls: ['../services.component.scss', './facial.component.scss'],
})
export class FacialComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  constructor() {}

  ngOnInit(): void {}

  selectTab(tabId: number, event) {
    event.preventDefault();
    this.staticTabs.tabs[tabId].active = true;
  }
}
