import { Component, OnInit } from '@angular/core';

import { Coffee } from './coffee';
import { CoffeeService } from './coffee.service';
import { CoffeeDetailComponent } from './coffee-detail.component';

import { Router } from '@angular/router';

@Component({
    selector: 'my-coffee',
    templateUrl: 'app/coffee.component.html',
	styleUrls: ['app/coffee.component.css']
})
export class CoffeeComponent {
	coffee: Coffee[];
	selectedCoffee: Coffee;
	
	ngOnInit(): void {
		this.getCoffee();
	}
	
	constructor(private router: Router,
	private coffeeService: CoffeeService) { }
	
	getCoffee(): void {
		this.coffeeService.getCoffee().then(
			coffee => this.coffee = coffee);
	}
	
	onSelect(coffee: Coffee): void {
		this.selectedCoffee = coffee;
	}
	
	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedCoffee.id]);
	}
	
	add(name: string): void {
	  name = name.trim();
	  if (!name) { return; }
	  this.coffeeService.create(name)
		.then(coffee => {
		  this.coffee.push(coffee);
		  this.selectedCoffee = null;
		});
	}
	
	delete(coffee: Coffee): void {
	  this.coffeeService
		  .delete(coffee.id)
		  .then(() => {
			this.coffee = this.coffee.filter(h => h !== coffee);
			if (this.selectedCoffee === coffee) { this.selectedCoffee = null; }
		  });
	}
}
