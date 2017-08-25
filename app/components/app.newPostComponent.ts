import { Component } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-post',
  styles: [`
      h2{
        margin-left: 15px;
      }
      .has-error input[type=text], 
      .has-error select {
          border-color: red;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      }
  `],
  template: ` <div class="container">
                <h2>New Posts View</h2>
                <fieldset>
                  <div>
                      <form method="post" class="form-horizontal" [formGroup]="newPostForm" (ngSubmit)="newPostForm.valid && submitRegistration(newPostForm.value)" novalidate>
                        <fieldset class="form-group">
                          <label for="id" class="control-label col-md-2">User Id: </label>
                          <div class="col-sm-6">
                            <select required class="form-control" formControlName="id" [(ngModel)]="selectedID" (change)="onChange($event.target.selectedIndex)">
                                <option *ngFor="let userId of userIds; let i = index">{{userId}}</option> 
                            </select>
                          </div>
                          <div class="form-text" *ngIf="newPostForm.controls.id.touched">
                            <div *ngIf="newPostForm.controls.id.hasError('required')">User ID is required.</div>
                          </div>s
                        </fieldset>
                        
                        <fieldset class="form-group">
                          <label for="eventDate" class="control-label col-md-2">Event Date: </label>
                          <div class="col-sm-6">
                            <input type="date" class="form-control" placeholder="Event Date" formControlName="eventDate" [(ngModel)]='date'>
                            <div class="form-text error" *ngIf="newPostForm.controls.eventDate.touched">
                              <div *ngIf="newPostForm.controls.eventDate.hasError('required')">Event Date is required.</div>
                            </div>
                          </div>
                        </fieldset>

                        <fieldset class="form-group">
                          <label for="postTitle" class="control-label col-md-2">Post Title:</label>
                          <div class="col-sm-6">
                          <input type="text" class="form-control" placeholder="Post Tile..." formControlName="postTitle" [(ngModel)]=title>
                            <div class='form-text error' *ngIf="newPostForm.controls.postTitle.touched">
                              <div *ngIf="newPostForm.controls.postTitle.hasError('required')">Post Tile is required.</div>
                            </div>
                          </div>
                        </fieldset>
                    
                        <fieldset class="form-group">
                          <label for="body" class="control-label col-md-2">Body: </label>
                          <div class="col-sm-6">
                          <input type="textarea" class="form-control" placeholder="Enter Post Details..." formControlName="body" [(ngModel)]=postBody>
                            <div class='form-text error' *ngIf="newPostForm.controls.body.touched">
                              <div *ngIf="newPostForm.controls.body.hasError('required')">Post Details required.</div>
                            </div>
                          </div>
                        </fieldset>
                        
                        <div class="col-md-offset-2 col-md-8 btn-group">
                          <button class='col-md-3 btn btn-success' type='submit' [disabled]='!newPostForm.valid' (click)=savePost(title,postBody)>Save</button>
                          <button type="button" class="col-md-3 btn btn-primary">Cancel</button>
                        </div>
                      </form>
                      <pre>{{newPostForm.value | json}}</pre>
                      <p>{{selectedID}}<br />{{date}}<br />{{title}}<br />{{postBody}}</p>
                    </div>
                </fieldset>
              </div>
              `
})
export class NewPostComponent {
  newPostForm: FormGroup;
  userIds: string[] = ["Jose", "Daniel", "Xavier", "Denisse","Mark","Luke","Gabriela","Maria","Andres","Carla"];
  userId: string;
  selectedID: string;
  selectedIndex: number;
  userIndex: number;
  title: string;
  postBody: string;
  date: Date;

  constructor(public fb: FormBuilder, private dService: DataService) {
    console.log('New Post Component constructor ran..');

    // Example use of FormBuilder, FormGroups, and FormControls
    this.newPostForm = fb.group({
      id: ['', Validators.required],
      eventDate: ['', Validators.required],
      postTitle: ['', Validators.required],
      body: ['', Validators.required]
    })
  }
  
  ngOnInit() {
  }

  submitRegistration(value: Object): void {
    console.log(value);
  }

  onChange(index: number) {
    this.userIndex = index + 1;
  }

  savePost(title: string, body: string){
    console.log(this.userIndex);
    this.dService.savePost(this.userIndex, title, body);
  }
}