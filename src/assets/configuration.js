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
var Config = /** @class */ (function () {
    function Config(http) {
        this.http = http;
    }
    Config.prototype.load = function () {
        var _this = this;
        this.http.get('src/config/env.json')
            .map(function (res) { return res.json(); }).subscribe(function (envData) {
            _this.env = envData;
            _this.http.get('src/config/' + envData.env + '.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return _this.config = data; }, function (error) {
                console.error(error);
                console.error("Error reading configuration file");
            });
        }, function (error) {
            console.error(error);
            console.error("Configuration file does not exists");
        });
    };
    Config.prototype.getEnv = function (key) {
        return this.env[key];
    };
    Config.prototype.get = function (key) {
        return this.config[key];
    };
    Config = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], Config);
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map