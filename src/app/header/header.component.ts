import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpened = false;
  constructor() {}

  ngOnInit(): void {}

  toggleNavbarItems() {
    this.isOpened = !this.isOpened;
  }
}
