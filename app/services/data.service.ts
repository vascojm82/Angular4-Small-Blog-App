import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private url = "http://localhost:5939"; 
  allPostsCount : number;

  constructor(public http:Http) { 
    console.log('Data service connected...');
  }

  getPosts() {
      var headers = new Headers();

      return this.http.get(this.url + "/posts",{
          headers: headers
      }).map((res: Response) => {
          if(res){
            this.allPostsCount = res.json().count;
            console.log("Posts Count: " + this.allPostsCount);
            return res.json();
          }
          else
            throw "Error Getting Posts"
      });
  }

  //Get all posts made by a specific user
  getUserPosts(userId: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + "/posts/user/" + userId)
        .toPromise()
          .then((res) => {
              if(res){
                console.log(res.json());
                resolve(res.json());
              }
              else
                reject('error');
          });
    });
  }

  //Get the last post made by a specific user
  getLastUserPost(userId: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + "/posts/user/last/" + userId)
        .toPromise()
          .then((res) => {
              if(res){
                resolve(res.json());
              }
              else
                reject('error');
          });
    });
  }

  //Get a specific post by the post's id 
  getPost(id: number) {
    var headers = new Headers();

    return this.http.get(this.url + "/posts/" + id,{
      headers: headers
    }).map((res: Response) => res.json());
  }

  //Get all comments pertaining to a specific post
  getComments(postId: number) {
    var headers = new Headers();

    return this.http.get(this.url + "/comments/" + postId,{
        headers: headers
    }).map((res: Response) => res.json());
  }

  //Save New Post
  savePost(userId: number, title: string, body: string){
      console.log("Posts Count:" + this.allPostsCount);
      //New Post object
      let newPost = {
        userId: userId,
        id: this.allPostsCount + 1,
        title: title,
        body: body
      }
      
      console.log("Post Object: " + JSON.stringify(newPost));
      
      this.http.post(this.url + "/post", newPost)
        .toPromise()
          .then((res: Response) => {
              console.log(res.json());  
              console.log("Post Saved.");})
          .catch((err) => {
              throw "Error: " + err;
          });
  }
}