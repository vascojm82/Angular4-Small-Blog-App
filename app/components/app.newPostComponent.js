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
var forms_1 = require("@angular/forms");
var data_service_1 = require("./../services/data.service");
var NewPostComponent = (function () {
    function NewPostComponent(fb, dService) {
        this.fb = fb;
        this.dService = dService;
        this.userIds = ["Jose", "Daniel", "Xavier", "Denisse", "Mark", "Luke", "Gabriela", "Maria", "Andres", "Carla"];
        console.log('New Post Component constructor ran..');
        // Example use of FormBuilder, FormGroups, and FormControls
        this.newPostForm = fb.group({
            id: ['', forms_1.Validators.required],
            eventDate: ['', forms_1.Validators.required],
            postTitle: ['', forms_1.Validators.required],
            body: ['', forms_1.Validators.required]
        });
    }
    NewPostComponent.prototype.ngOnInit = function () {
    };
    NewPostComponent.prototype.submitRegistration = function (value) {
        console.log(value);
    };
    NewPostComponent.prototype.onChange = function (index) {
        this.userIndex = index + 1;
    };
    NewPostComponent.prototype.savePost = function (title, body) {
        console.log(this.userIndex);
        this.dService.savePost(this.userIndex, title, body);
    };
    return NewPostComponent;
}());
NewPostComponent = __decorate([
    core_1.Component({
        selector: 'app-post',
        styles: ["\n      h2{\n        margin-left: 15px;\n      }\n      .has-error input[type=text], \n      .has-error select {\n          border-color: red;\n          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n      }\n  "],
        template: " <div class=\"container\">\n                <h2>New Posts View</h2>\n                <fieldset>\n                  <div>\n                      <form method=\"post\" class=\"form-horizontal\" [formGroup]=\"newPostForm\" (ngSubmit)=\"newPostForm.valid && submitRegistration(newPostForm.value)\" novalidate>\n                        <fieldset class=\"form-group\">\n                          <label for=\"id\" class=\"control-label col-md-2\">User Id: </label>\n                          <div class=\"col-sm-6\">\n                            <select required class=\"form-control\" formControlName=\"id\" [(ngModel)]=\"selectedID\" (change)=\"onChange($event.target.selectedIndex)\">\n                                <option *ngFor=\"let userId of userIds; let i = index\">{{userId}}</option> \n                            </select>\n                          </div>\n                          <div class=\"form-text\" *ngIf=\"newPostForm.controls.id.touched\">\n                            <div *ngIf=\"newPostForm.controls.id.hasError('required')\">User ID is required.</div>\n                          </div>s\n                        </fieldset>\n                        \n                        <fieldset class=\"form-group\">\n                          <label for=\"eventDate\" class=\"control-label col-md-2\">Event Date: </label>\n                          <div class=\"col-sm-6\">\n                            <input type=\"date\" class=\"form-control\" placeholder=\"Event Date\" formControlName=\"eventDate\" [(ngModel)]='date'>\n                            <div class=\"form-text error\" *ngIf=\"newPostForm.controls.eventDate.touched\">\n                              <div *ngIf=\"newPostForm.controls.eventDate.hasError('required')\">Event Date is required.</div>\n                            </div>\n                          </div>\n                        </fieldset>\n\n                        <fieldset class=\"form-group\">\n                          <label for=\"postTitle\" class=\"control-label col-md-2\">Post Title:</label>\n                          <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Post Tile...\" formControlName=\"postTitle\" [(ngModel)]=title>\n                            <div class='form-text error' *ngIf=\"newPostForm.controls.postTitle.touched\">\n                              <div *ngIf=\"newPostForm.controls.postTitle.hasError('required')\">Post Tile is required.</div>\n                            </div>\n                          </div>\n                        </fieldset>\n                    \n                        <fieldset class=\"form-group\">\n                          <label for=\"body\" class=\"control-label col-md-2\">Body: </label>\n                          <div class=\"col-sm-6\">\n                          <input type=\"textarea\" class=\"form-control\" placeholder=\"Enter Post Details...\" formControlName=\"body\" [(ngModel)]=postBody>\n                            <div class='form-text error' *ngIf=\"newPostForm.controls.body.touched\">\n                              <div *ngIf=\"newPostForm.controls.body.hasError('required')\">Post Details required.</div>\n                            </div>\n                          </div>\n                        </fieldset>\n                        \n                        <div class=\"col-md-offset-2 col-md-8 btn-group\">\n                          <button class='col-md-3 btn btn-success' type='submit' [disabled]='!newPostForm.valid' (click)=savePost(title,postBody)>Save</button>\n                          <button type=\"button\" class=\"col-md-3 btn btn-primary\">Cancel</button>\n                        </div>\n                      </form>\n                      <pre>{{newPostForm.value | json}}</pre>\n                      <p>{{selectedID}}<br />{{date}}<br />{{title}}<br />{{postBody}}</p>\n                    </div>\n                </fieldset>\n              </div>\n              "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, data_service_1.DataService])
], NewPostComponent);
exports.NewPostComponent = NewPostComponent;
