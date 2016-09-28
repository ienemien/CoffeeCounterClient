import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CoffeeService } from './coffee.service';
import { Coffee } from './coffee';

@Component ({
    selector: 'my-coffee-detail',
    templateUrl: 'app/coffee-detail.component.html',
    styleUrls: ['app/coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

    @Input()
    coffee:Coffee;

    types = ['Espresso', 'Lungo', 'Ristretto', 'With milk'];

    constructor(private coffeeService:CoffeeService,
                private route:ActivatedRoute) {
    }

    ngOnInit():void {
        this.route.params.forEach((params:Params) => {
            let id = +params['id'];
            if (id) {
                this.coffeeService.getCoffeeDetail(id)
                    .then(coffee => this.coffee = coffee);
            } else {
                this.coffee = new Coffee();
            }
        });
    }

    save():void {
        if (this.coffee.id != null) {
            this.coffeeService.update(this.coffee)
                .then(this.goBack);
        } else {
            this.coffeeService.create(this.coffee)
                .then(this.goBack);
        }
    }

    goBack():void {
        window.history.back();
    }
}