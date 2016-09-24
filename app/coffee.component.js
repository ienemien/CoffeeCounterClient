"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var coffee_service_1 = require('./coffee.service');
var router_1 = require('@angular/router');
var CoffeeComponent = (function () {
    function CoffeeComponent(router, coffeeService) {
        this.router = router;
        this.coffeeService = coffeeService;
    }
    CoffeeComponent.prototype.ngOnInit = function () {
        this.getCoffee();
    };
    CoffeeComponent.prototype.getCoffee = function () {
        var _this = this;
        this.coffeeService.getCoffee().then(function (coffee) { return _this.coffee = coffee; });
        console.log("Coffee: " + this.coffee);
    };
    CoffeeComponent.prototype.onSelect = function (coffee) {
        this.selectedCoffee = coffee;
    };
    CoffeeComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCoffee.id]);
    };
    CoffeeComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.coffeeService.create(name)
            .then(function (coffee) {
            _this.coffee.push(coffee);
            _this.selectedCoffee = null;
        });
    };
    CoffeeComponent.prototype.delete = function (coffee) {
        var _this = this;
        this.coffeeService
            .delete(coffee.id)
            .then(function () {
            _this.coffee = _this.coffee.filter(function (h) { return h !== coffee; });
            if (_this.selectedCoffee === coffee) {
                _this.selectedCoffee = null;
            }
        });
    };
    CoffeeComponent = __decorate([
        core_1.Component({
            selector: 'my-coffee',
            templateUrl: 'app/coffee.component.html',
            styleUrls: ['app/coffee.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, coffee_service_1.CoffeeService])
    ], CoffeeComponent);
    return CoffeeComponent;
}());
exports.CoffeeComponent = CoffeeComponent;
//# sourceMappingURL=coffee.component.js.map