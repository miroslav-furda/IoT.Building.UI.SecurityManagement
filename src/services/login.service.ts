import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {User} from "../components/model/user";
import "rxjs/add/observable/of";
import {AlertService} from "./alert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Headers} from '@angular/http';
import {Config} from "../config/config";

@Injectable()
export class LoginService {
  loading = false;
  returnUrl: string;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router,
              private alertService: AlertService, private config: Config) {
  }

  login(username: string, password: string) {
    this.loading = true;

    let server: string = this.config.get("url");
    let port: number = this.config.get("port");

    let url = "http://" + server + ":" + port + "/login/";

    let user: User = new User();
    user.name = username;
    user.password = password;
    let currentUser = JSON.stringify(user);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(url, currentUser, {headers: headers}).subscribe(
      () => {
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
