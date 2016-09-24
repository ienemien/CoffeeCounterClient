import { Component } from '@angular/core';

@Component({
  selector: 'coffee-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/coffee" routerLinkActive="active">Coffee</a>
   </nav>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Coffee Counter';
}