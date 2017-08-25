import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; 
import { DropdownModule } from "ngx-dropdown";
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/app.postsComponent';
import { CommentsComponent } from "./components/app.commentsComponent";
import { NewPostComponent } from "./components/app.newPostComponent";
import { DirectiveComponent } from "./components/app.directiveComponent";
import { NotFoundComponent } from "./components/app.notFoundComponent";
import { CounterDirective } from "./directives/app.counter.directive";

import { DataService } from './services/data.service';
import { SortPipe } from "./Pipes/app.sortPipe";

const appRoutes: Routes = [
    {path:'', component:PostsComponent},
    {path:'comments/:id', component:CommentsComponent},
    {path:'newpost', component:NewPostComponent},
    {path:'directive', component:DirectiveComponent},
    {path:'**', component:NotFoundComponent}
    
  ];

@NgModule({
    declarations: [
        SortPipe,
        AppComponent,
        PostsComponent, 
        CommentsComponent,
        NewPostComponent, 
        NotFoundComponent,
        DirectiveComponent,
        CounterDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule, 
        HttpModule, 
        DropdownModule,
        RouterModule.forRoot(appRoutes)
    ], 
    providers: [
        DataService,
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }