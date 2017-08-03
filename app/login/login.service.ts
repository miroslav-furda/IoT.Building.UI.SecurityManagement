import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import {User} from "../model/user";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class LoginService {

  //http not used yet
  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    let user: User = new User();
    user.username = username;
    user.password = password;

    let currentUser = JSON.stringify(user);

    localStorage.setItem('currentUser', currentUser);

    return Observable.of(currentUser);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
