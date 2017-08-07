import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {User} from "../model/user";
import "rxjs/add/observable/of";
import {AlertService} from "./alert/alert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Headers} from '@angular/http';

@Injectable()
export class LoginService {
  loading = false;
  returnUrl: string;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router, private alertService: AlertService) {
  }

  login(username: string, password: string) {
    this.loading = true;
    //todo change server after deployment
    const URL: string = "http://localhost:8080/login/";

    let user: User = new User();
    user.name = username;
    user.password = password;
    let currentUser = JSON.stringify(user);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(URL, currentUser, {headers: headers}).subscribe(() => {
        this.alertService.success('Login successful', true);
        localStorage.setItem('currentUser', currentUser);
        this.router.navigate([this.returnUrl]);
      },
      () => {
        this.alertService.error('Unauthorized request, error code 401');
        this.loading = false;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}
