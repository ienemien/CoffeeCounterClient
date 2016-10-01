import { Component } from '@angular/core';

@Component({
  selector: 'coffee-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/coffee" routerLinkActive="active">Coffee</a>
    <a routerLink="/new" routerLinkActive="active">New Coffee</a>
   </nav>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Coffee Counter';
}