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
var CounterDirective = (function () {
    function CounterDirective(renderer, element) {
        var _this = this;
        this.renderer = renderer;
        this.element = element;
        this.count = 0;
        this.inc = function () {
            _this.count = _this.count + 1;
            _this.renderer.setElementAttribute(_this.inputElement, "placeholder", _this.count.toString());
        };
        this.dec = function () {
            if (_this.count > 0) {
                _this.count = _this.count - 1;
                _this.renderer.setElementAttribute(_this.inputElement, "placeholder", _this.count.toString());
            }
        };
        this.nativeElement = element.nativeElement;
    }
    CounterDirective.prototype.ngOnInit = function () {
        //text box
        this.inputElement = this.renderer.createElement(this.nativeElement, "input");
        this.renderer.setElementAttribute(this.inputElement, "placeholder", this.count.toString());
        //Add Button for Incrementing count
        this.button1_element = this.renderer.createElement(this.nativeElement, "button");
        this.renderer.createText(this.button1_element, "+");
        this.renderer.listen(this.button1_element, "click", this.inc);
        this.renderer.setElementClass(this.button1_element, "btnAddDec", true);
        //Add Button for decrementing count
        this.button2_element = this.renderer.createElement(this.nativeElement, "button");
        this.renderer.createText(this.button2_element, "-");
        this.renderer.listen(this.button2_element, "click", this.dec);
        this.renderer.setElementClass(this.button2_element, "btnAddDec", true);
    };
    return CounterDirective;
}());
CounterDirective = __decorate([
    core_1.Directive({
        selector: "[counter-directive]"
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], CounterDirective);
exports.CounterDirective = CounterDirective;
