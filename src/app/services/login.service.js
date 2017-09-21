"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var user_1 = require("../components/model/user");
require("rxjs/add/observable/of");
var alert_service_1 = require("./alert.service");
var router_1 = require("@angular/router");
var config_1 = require("../config/config");
var LoginService = /** @class */ (function () {
    function LoginService(http, route, router, alertService, config) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.config = config;
        this.loading = false;
        this.user = new user_1.User();
    }
    LoginService.prototype.login = function () {
        this.loading = true;
        var server = this.config.get("url");
        var port = this.config.get("port");
        var url = "http://" + server + ":" + port + "/login/";
        var currentUser = JSON.stringify(this.user);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        localStorage.setItem('currentUser', currentUser);
        this.router.navigate([this.returnUrl]);
        /*this.http.post(url, currentUser, {headers: headers}).subscribe(
          () => {
            this.alertService.success('Login successful', true);
            localStorage.setItem('currentUser', currentUser);
            this.router.navigate([this.returnUrl]);
          },
          () => {
            this.alertService.error('Unauthorized request, error code 401');
            this.loading = false;
          });*/
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginService.prototype.logOutFromApplication = function () {
        localStorage.removeItem('currentUser');
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    LoginService.prototype.sentCreatedUsersOnServer = function (allTenants, allGuests) {
        var server = this.config.get("url");
        var port = this.config.get("port");
        var urlAddress = "http://" + server + ":" + port + "/addUser/";
        var result = {
            "admin": __assign({}, allTenants),
            "guest": __assign({}, allGuests)
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(urlAddress, result, { headers: headers });
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.ActivatedRoute,
            router_1.Router,
            alert_service_1.AlertService,
            config_1.Config])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
