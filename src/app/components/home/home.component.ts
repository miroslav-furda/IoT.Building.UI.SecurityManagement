import {Component} from '@angular/core';
import {User} from '../../model/user';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
