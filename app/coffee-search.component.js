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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var coffee_search_service_1 = require('./coffee-search.service');
var CoffeeSearchComponent = (function () {
    function CoffeeSearchComponent(coffeeSearchService, router) {
        this.coffeeSearchService = coffeeSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    CoffeeSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    CoffeeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coffee = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.coffeeSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    CoffeeSearchComponent.prototype.gotoDetail = function (coffee) {
        var link = ['/detail', coffee.id];
        this.router.navigate(link);
    };
    CoffeeSearchComponent = __decorate([
        core_1.Component({
            selector: 'coffee-search',
            templateUrl: 'app/coffee-search.component.html',
            styleUrls: ['app/coffee-search.component.css'],
            providers: [coffee_search_service_1.CoffeeSearchService]
        }), 
        __metadata('design:paramtypes', [coffee_search_service_1.CoffeeSearchService, router_1.Router])
    ], CoffeeSearchComponent);
    return CoffeeSearchComponent;
}());
exports.CoffeeSearchComponent = CoffeeSearchComponent;
//# sourceMappingURL=coffee-search.component.js.map