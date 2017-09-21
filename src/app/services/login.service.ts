import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {User} from "../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {Configuration} from "../../assets/configuration";
import {ToastrService} from "ngx-toastr";
import 'rxjs/add/operator/map'
import "rxjs/add/observable/of";

@Injectable()
export class LoginService {
  loading = false;
  returnUrl: string;

  constructor(private http: Http,
              private route: ActivatedRoute,
              private router: Router,
              private config: Configuration,
              private toastr: ToastrService) {
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
        this.toastr.success('Login successful', 'Welcome ' + user.name);
        localStorage.setItem('currentUser', currentUser);
        this.router.navigate([this.returnUrl]);
      },
      () => {
        this.toastr.error("Unauthorized request, error code 401");
        this.loading = false;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}
