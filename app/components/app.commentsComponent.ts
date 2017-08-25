import { Component } from '@angular/core';
import { DataService } from './../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Comments } from './../Model/app.commentsInterface';
import { SortPipe } from "./../Pipes/app.sortPipe";

@Component({
    selector: 'app-comments',
    styleUrls: ['./app/CSS/app.List.style.css'],
    template: ` <div class="container">
                    <h2>Post Details View</h2>
                    <div class="row">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>{{post[0].title}}</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p>{{post[0].body}}</p>
                            </div>
                        </div>
                
                        <hr />

                        <div class="row">
                            <h3>Comments Section</h3>
                        </div>
            
                        <div class="row">
                            <div class="col-md-4">
                                Order By:
                                <select [ngModel]="sort" (ngModelChange)="onChange($event)" name="sortOptions">
                                        <option selected value="name">Name</option>
                                        <option value="voteCount">Votes</option>
                                </select>
                            </div>
                        </div>
            
                        <br />

                        <ul class="list-group col-md-11">
                            <li *ngFor="let comment of comments | sortBy: sort: order; let i = index;" class="list-unstyled">
                               <div class="row"> 
                                    <div class="col-md-1">
                                        <div (click)="upvote(i)">
                                            <span class="glyphicon glyphicon-chevron-up" style="padding-left: 4px; cursor: pointer;"></span>
                                        </div>
                                        <div class="badge">
                                            <span>{{comments[i].voteCount}}</span>
                                        </div>
                                        <div (click)="downvote(i)">
                                            <span class="glyphicon glyphicon-chevron-down" style="padding-left: 4px; cursor: pointer;"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-11 tn">
                                        <h4 (click)="toggleComment(i)">{{comment.name}}</h4>
                                        <div *ngIf="!comments[i].hidden">
                                            <h6>{{comment.email}}</h6>
                                            <p>{{comment.body}}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>  
                </div>
              `
})

export class CommentsComponent {
    id: any;
    post: any;
    comments: Comments[]; 
    sort: string = 'name';
    order: boolean = false;
    
    constructor(private route: ActivatedRoute, private dService: DataService) {
        console.log('Comments Component constructor ran..');
        
        this.id = this.route.snapshot.url.toString().substring(this.route.snapshot.url.toString().indexOf(',', 0) + 1);
        this.dService.getPost(this.id).subscribe((post) => {this.post = post; console.log("Post: " + JSON.stringify(this.post));});
        this.dService.getComments(this.id).subscribe(
            (comments) => {
                this.comments = comments;
                console.log("Comments Before: " + JSON.stringify(this.comments));
                for (let comment of this.comments) {
                    comment.hidden = false;
                    comment.voteCount = 0;
                 }
                 console.log("Comments After: " + JSON.stringify(this.comments));
            }
        );
    }
    
    ngOnInit() {
    }

    onChange(newValue: string) {
        console.log(newValue);
        if(newValue === "name")
        {
            console.log("I'm Alive: " + newValue);
            this.order = false; 
            this.sort = newValue; 
            return
        }

        console.log("I'm Alive, I'm Alive: " + newValue);
        this.order = true;
        this.sort = newValue;
    }

    toggleComment(index: number){
        this.comments[index].hidden = !this.comments[index].hidden;
    }

    upvote(index: number){
        this.comments[index].voteCount++;
    }

    downvote(index: number){
        if(this.comments[index].voteCount > 0)
            this.comments[index].voteCount--;
    }
}