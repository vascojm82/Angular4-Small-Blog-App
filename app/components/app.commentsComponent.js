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
var data_service_1 = require("./../services/data.service");
var router_1 = require("@angular/router");
var CommentsComponent = (function () {
    function CommentsComponent(route, dService) {
        var _this = this;
        this.route = route;
        this.dService = dService;
        this.sort = 'name';
        this.order = false;
        console.log('Comments Component constructor ran..');
        this.id = this.route.snapshot.url.toString().substring(this.route.snapshot.url.toString().indexOf(',', 0) + 1);
        this.dService.getPost(this.id).subscribe(function (post) { _this.post = post; console.log("Post: " + JSON.stringify(_this.post)); });
        this.dService.getComments(this.id).subscribe(function (comments) {
            _this.comments = comments;
            console.log("Comments Before: " + JSON.stringify(_this.comments));
            for (var _i = 0, _a = _this.comments; _i < _a.length; _i++) {
                var comment = _a[_i];
                comment.hidden = false;
                comment.voteCount = 0;
            }
            console.log("Comments After: " + JSON.stringify(_this.comments));
        });
    }
    CommentsComponent.prototype.ngOnInit = function () {
    };
    CommentsComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        if (newValue === "name") {
            console.log("I'm Alive: " + newValue);
            this.order = false;
            this.sort = newValue;
            return;
        }
        console.log("I'm Alive, I'm Alive: " + newValue);
        this.order = true;
        this.sort = newValue;
    };
    CommentsComponent.prototype.toggleComment = function (index) {
        this.comments[index].hidden = !this.comments[index].hidden;
    };
    CommentsComponent.prototype.upvote = function (index) {
        this.comments[index].voteCount++;
    };
    CommentsComponent.prototype.downvote = function (index) {
        if (this.comments[index].voteCount > 0)
            this.comments[index].voteCount--;
    };
    return CommentsComponent;
}());
CommentsComponent = __decorate([
    core_1.Component({
        selector: 'app-comments',
        styleUrls: ['./app/CSS/app.List.style.css'],
        template: " <div class=\"container\">\n                    <h2>Post Details View</h2>\n                    <div class=\"row\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <h2>{{post[0].title}}</h2>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <p>{{post[0].body}}</p>\n                            </div>\n                        </div>\n                \n                        <hr />\n\n                        <div class=\"row\">\n                            <h3>Comments Section</h3>\n                        </div>\n            \n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                Order By:\n                                <select [ngModel]=\"sort\" (ngModelChange)=\"onChange($event)\" name=\"sortOptions\">\n                                        <option selected value=\"name\">Name</option>\n                                        <option value=\"voteCount\">Votes</option>\n                                </select>\n                            </div>\n                        </div>\n            \n                        <br />\n\n                        <ul class=\"list-group col-md-11\">\n                            <li *ngFor=\"let comment of comments | sortBy: sort: order; let i = index;\" class=\"list-unstyled\">\n                               <div class=\"row\"> \n                                    <div class=\"col-md-1\">\n                                        <div (click)=\"upvote(i)\">\n                                            <span class=\"glyphicon glyphicon-chevron-up\" style=\"padding-left: 4px; cursor: pointer;\"></span>\n                                        </div>\n                                        <div class=\"badge\">\n                                            <span>{{comments[i].voteCount}}</span>\n                                        </div>\n                                        <div (click)=\"downvote(i)\">\n                                            <span class=\"glyphicon glyphicon-chevron-down\" style=\"padding-left: 4px; cursor: pointer;\"></span>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-11 tn\">\n                                        <h4 (click)=\"toggleComment(i)\">{{comment.name}}</h4>\n                                        <div *ngIf=\"!comments[i].hidden\">\n                                            <h6>{{comment.email}}</h6>\n                                            <p>{{comment.body}}</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>  \n                </div>\n              "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, data_service_1.DataService])
], CommentsComponent);
exports.CommentsComponent = CommentsComponent;
