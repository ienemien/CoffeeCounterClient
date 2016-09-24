import { Component, OnInit } from '@angular/core';

import { Coffee } from './coffee';
import { CoffeeService } from './coffee.service';

import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  coffee: Coffee[] = [];

  constructor(
  private router: Router,
  private coffeeService: CoffeeService) {
}

  ngOnInit(): void {
    this.coffeeService.getCoffee()
      .then(coffee => this.coffee = coffee.slice(1, 5));
  }

  gotoDetail(coffeeDetail: Coffee): void {
	let link = ['/detail', coffeeDetail.id];
	this.router.navigate(link);
	}
}