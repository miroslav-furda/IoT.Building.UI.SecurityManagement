import {Component, OnInit} from "@angular/core";
import {LoginService} from "../../services/login.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../services/alert.service";
import {User} from "../model/user";

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.logout();
  }

  login() {
    this.loginService.login(this.user.name, this.user.password);
  }
}
