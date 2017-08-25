"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "     <div class=\"header\">\n                    <div class=\"navbar navbar-default\" role=\"navigation\">\n                      <div class=\"container\">\n                        <div class=\"navbar-header\">\n\n                          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#js-navbar-collapse\">\n                            <span class=\"sr-only\">Toggle navigation</span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                          </button>\n\n                          <a class=\"navbar-brand\" routerLink=\"/\">Training App</a>\n                        </div>\n\n                        <div class=\"collapse navbar-collapse\" id=\"js-navbar-collapse\">\n\n                          <ul class=\"nav navbar-nav\">\n                            <li><a routerLink=\"/\">Posts</a></li>\n                            <li><a routerLink=\"/newpost\">New Post</a></li>\n                            <li><a routerLink=\"/directive\">Directives</a></li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <router-outlet></router-outlet>\n                ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
