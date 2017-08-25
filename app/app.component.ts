import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `     <div class="header">
                    <div class="navbar navbar-default" role="navigation">
                      <div class="container">
                        <div class="navbar-header">

                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>

                          <a class="navbar-brand" routerLink="/">Training App</a>
                        </div>

                        <div class="collapse navbar-collapse" id="js-navbar-collapse">

                          <ul class="nav navbar-nav">
                            <li><a routerLink="/">Posts</a></li>
                            <li><a routerLink="/newpost">New Post</a></li>
                            <li><a routerLink="/directive">Directives</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <router-outlet></router-outlet>
                `,
})
export class AppComponent {
  
}