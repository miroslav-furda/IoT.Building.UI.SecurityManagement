"use strict";
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
var user_1 = require("../model/user");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var LoginService = (function () {
    //http not used yet
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (username, password) {
        var user = new user_1.User();
        user.username = username;
        user.password = password;
        var currentUser = JSON.stringify(user);
        localStorage.setItem('currentUser', currentUser);
        return Observable_1.Observable.of(currentUser);
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map