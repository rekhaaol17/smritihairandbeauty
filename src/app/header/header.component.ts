import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'sm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpened = false;
  isProfileMenuOpened = false;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  toggleNavbarItems() {
    this.isOpened = !this.isOpened;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpened = !this.isProfileMenuOpened;
  }

  logout(event) {
    event.preventDefault();
    this.authService.signOut();
    this.isProfileMenuOpened = false;
  }
}
