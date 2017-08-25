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
var app_counter_directive_1 = require("./../directives/app.counter.directive");
var DirectiveComponent = (function () {
    function DirectiveComponent() {
        console.log('Directive Component constructor ran..');
    }
    DirectiveComponent.prototype.ngOnInit = function () {
    };
    DirectiveComponent.prototype.ngAfterViewInit = function () {
    };
    return DirectiveComponent;
}());
__decorate([
    core_1.ViewChild(app_counter_directive_1.CounterDirective),
    __metadata("design:type", app_counter_directive_1.CounterDirective)
], DirectiveComponent.prototype, "counterDirective", void 0);
DirectiveComponent = __decorate([
    core_1.Component({
        selector: 'app-directives',
        styleUrls: ['./app/CSS/app.List.style.css'],
        template: " <div class=\"container\">\n                    <h2>Custom Directives View</h2>\n                    <div counter-directive></div>\n                    <div counter-directive></div>\n                    <div counter-directive></div>\n                </div>\n               ",
    }),
    __metadata("design:paramtypes", [])
], DirectiveComponent);
exports.DirectiveComponent = DirectiveComponent;
