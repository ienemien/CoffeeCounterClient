import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { CoffeeComponent }  from './coffee.component';
import { CoffeeDetailComponent }  from './coffee-detail.component';
import { CoffeeService }  from './coffee.service';

import { routing } from './app.routing';


@NgModule({
  imports: [ 
	BrowserModule,
	FormsModule,
	HttpModule,
	routing
  ],
	declarations: [ 
		AppComponent,
		DashboardComponent,
		CoffeeComponent,
		CoffeeDetailComponent
	],
	providers: [
		CoffeeService
	],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
