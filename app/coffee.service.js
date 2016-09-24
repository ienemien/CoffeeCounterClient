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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CoffeeService = (function () {
    function CoffeeService(http) {
        this.http = http;
        this.coffeeUrl = 'http://localhost:8080/coffee'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CoffeeService.prototype.getCoffee = function () {
        console.log("Getting coffee");
        return this.http.get(this.coffeeUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CoffeeService.prototype.getCoffeeDetail = function (id) {
        return this.getCoffee()
            .then(function (coffee) { return coffee.find(function (coffee) { return coffee.id === id; }); });
    };
    CoffeeService.prototype.update = function (coffee) {
        var url = this.coffeeUrl + "/" + coffee.id;
        return this.http
            .put(url, JSON.stringify(coffee), { headers: this.headers })
            .toPromise()
            .then(function () { return coffee; })
            .catch(this.handleError);
    };
    CoffeeService.prototype.create = function (name) {
        return this.http
            .post(this.coffeeUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    CoffeeService.prototype.delete = function (id) {
        var url = this.coffeeUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CoffeeService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CoffeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CoffeeService);
    return CoffeeService;
}());
exports.CoffeeService = CoffeeService;
//# sourceMappingURL=coffee.service.js.map