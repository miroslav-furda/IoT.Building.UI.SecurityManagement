import {Component, OnInit} from "@angular/core";
import {LoginService} from "../../services/login.service";
import {User} from "../../model/user";

@Component({
  templateUrl: 'login.component.html',
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
