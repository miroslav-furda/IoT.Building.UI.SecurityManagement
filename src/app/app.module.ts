import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginGuard} from "./components/login/login.guard";
import {LoginService} from "./services/login.service";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {Configuration} from "../assets/configuration";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export function configFactory(config: Configuration) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    LoginGuard,
    LoginService,
    Configuration,
    {provide: APP_INITIALIZER, useFactory: configFactory, deps: [Configuration], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
