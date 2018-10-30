import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = (localStorage.getItem('currentUser') === null) ? false : true;
  }

  logoutUser() {
    this.auth.signOut();
  }

}
