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
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.url = "http://localhost:5939";
        console.log('Data service connected...');
    }
    DataService.prototype.getPosts = function () {
        var _this = this;
        var headers = new http_1.Headers();
        return this.http.get(this.url + "/posts", {
            headers: headers
        }).map(function (res) {
            if (res) {
                _this.allPostsCount = res.json().count;
                console.log("Posts Count: " + _this.allPostsCount);
                return res.json();
            }
            else
                throw "Error Getting Posts";
        });
    };
    //Get all posts made by a specific user
    DataService.prototype.getUserPosts = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + "/posts/user/" + userId)
                .toPromise()
                .then(function (res) {
                if (res) {
                    console.log(res.json());
                    resolve(res.json());
                }
                else
                    reject('error');
            });
        });
    };
    //Get the last post made by a specific user
    DataService.prototype.getLastUserPost = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + "/posts/user/last/" + userId)
                .toPromise()
                .then(function (res) {
                if (res) {
                    resolve(res.json());
                }
                else
                    reject('error');
            });
        });
    };
    //Get a specific post by the post's id 
    DataService.prototype.getPost = function (id) {
        var headers = new http_1.Headers();
        return this.http.get(this.url + "/posts/" + id, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    //Get all comments pertaining to a specific post
    DataService.prototype.getComments = function (postId) {
        var headers = new http_1.Headers();
        return this.http.get(this.url + "/comments/" + postId, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    //Save New Post
    DataService.prototype.savePost = function (userId, title, body) {
        console.log("Posts Count:" + this.allPostsCount);
        //New Post object
        var newPost = {
            userId: userId,
            id: this.allPostsCount + 1,
            title: title,
            body: body
        };
        console.log("Post Object: " + JSON.stringify(newPost));
        this.http.post(this.url + "/post", newPost)
            .toPromise()
            .then(function (res) {
            console.log(res.json());
            console.log("Post Saved.");
        })
            .catch(function (err) {
            throw "Error: " + err;
        });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
