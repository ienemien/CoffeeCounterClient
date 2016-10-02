import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CoffeeService } from './coffee.service';
import { Coffee } from './coffee';

@Component ({
    selector: 'coffee-detail',
    templateUrl: 'app/coffee-detail.component.html',
    styleUrls: ['app/coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

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
                    .then(coffeeDetail => {
                        this.coffee = coffeeDetail;
                    });
            } else {
                this.coffee = new Coffee(null, "", "Espresso", 0, 0);
            }
        });
    }

    save():void {
        let newCoffee = this.coffee;

        if (this.coffee.id != null) {
            this.coffeeService.update(newCoffee)
                .then(this.goBack);
        } else {
            this.coffeeService.create(newCoffee)
                .then(this.goBack);
        }
    }

    goBack():void {
        window.history.back();
    }
}