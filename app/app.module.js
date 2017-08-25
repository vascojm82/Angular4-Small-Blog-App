"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ngx_dropdown_1 = require("ngx-dropdown");
var common_1 = require("@angular/common");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var app_postsComponent_1 = require("./components/app.postsComponent");
var app_commentsComponent_1 = require("./components/app.commentsComponent");
var app_newPostComponent_1 = require("./components/app.newPostComponent");
var app_directiveComponent_1 = require("./components/app.directiveComponent");
var app_notFoundComponent_1 = require("./components/app.notFoundComponent");
var app_counter_directive_1 = require("./directives/app.counter.directive");
var data_service_1 = require("./services/data.service");
var app_sortPipe_1 = require("./Pipes/app.sortPipe");
var appRoutes = [
    { path: '', component: app_postsComponent_1.PostsComponent },
    { path: 'comments/:id', component: app_commentsComponent_1.CommentsComponent },
    { path: 'newpost', component: app_newPostComponent_1.NewPostComponent },
    { path: 'directive', component: app_directiveComponent_1.DirectiveComponent },
    { path: '**', component: app_notFoundComponent_1.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_sortPipe_1.SortPipe,
            app_component_1.AppComponent,
            app_postsComponent_1.PostsComponent,
            app_commentsComponent_1.CommentsComponent,
            app_newPostComponent_1.NewPostComponent,
            app_notFoundComponent_1.NotFoundComponent,
            app_directiveComponent_1.DirectiveComponent,
            app_counter_directive_1.CounterDirective
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            http_1.HttpModule,
            ngx_dropdown_1.DropdownModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [
            data_service_1.DataService,
            { provide: common_1.APP_BASE_HREF, useValue: '/' }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
