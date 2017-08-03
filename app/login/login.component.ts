import {Component, OnInit} from "@angular/core";
import {LoginService} from "./login.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "./alert/alert.service";
import {User} from "../model/user";

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  user: User = new User();
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loginService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.loginService.login(this.user.username, this.user.password)
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
