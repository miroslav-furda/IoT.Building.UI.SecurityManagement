import {Component, OnInit} from "@angular/core";
import {User} from "../model/user";

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
