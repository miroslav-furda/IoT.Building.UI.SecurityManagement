import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from "../login/login.component";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from "../home/home.component";
import {AlertComponent} from "../alert/alert.component";
import {LoginGuard} from "../login/login.guard";
import {LoginService} from "../../services/login.service";
import {AlertService} from "../../services/alert.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent, LoginComponent, HomeComponent, AlertComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpModule
  ],
  providers: [LoginGuard, LoginService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
