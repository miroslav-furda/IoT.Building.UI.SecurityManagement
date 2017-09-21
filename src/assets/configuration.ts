import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class Configuration {
  private config: Object;
  private env: Object;

  constructor(private http: Http) {
  }

  load() {
    this.http.get("assets/env.json")
      .map(res => res.json()).subscribe(
      (envData) => {
        this.env = envData;
        this.http.get('assets/'+envData.env + '.json')
          .map(res => res.json())
          .subscribe(
            data => this.config = data
            ,
            (error: any) => {
              console.error(error);
              console.error("Error reading configuration file");
            });
      },
      (error) => {
        console.error(error);
        console.error("Configuration file does not exists");
      });
  }

  getEnv(key: any) {
    return this.env[key];
  }

  get(key: any) {
    return this.config[key];
  }
}
