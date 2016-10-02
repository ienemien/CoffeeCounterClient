import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { CoffeeComponent }  from './coffee.component';
import { CoffeeDetailComponent }  from './coffee-detail.component';
import { StarRatingComponent }  from './star-rating.component';
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
		CoffeeComponent,
		CoffeeDetailComponent,
		StarRatingComponent
	],
	providers: [
		CoffeeService
	],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
