import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterModule, Routes }  from '@angular/router';


@Component({
  selector: 'app-posts',
  styleUrls: ['./app/CSS/app.List.style.css'],
  template: ` <div class="container">
                <h2>Posts View</h2>
                <ul class="list-group col-md-10">
                  <li *ngFor="let post of posts" class="list-unstyled tn"> 
                    <a (click)=getComments(post.id)>
                      <h2>{{post.id}}</h2>
                      <p>Title: {{post.title}}</p>
                    </a>    
                  </li>
                </ul>
              </div>
              `
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private dService: DataService, private route: ActivatedRoute,
    private router: Router) {
    console.log('Posts Component constructor ran..');
    this.dService.getPosts().subscribe((results) => this.posts = results.posts);
  }

  ngOnInit() {
  }

  getComments(postID: number){
      console.log(postID);
      this.router.navigate(['comments', postID]);   //Changes to requested URL
  }
}