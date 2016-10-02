import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component ({
    selector: 'star-rating',
    templateUrl: 'app/star-rating.component.html'
})
export class StarRatingComponent {

    @Input()
    coffeeRating:number;

    @Output()
    ratingUpdated = new EventEmitter();

    constructor() {
    }

    setRating(newRating:number) {
        this.coffeeRating = newRating;
        this.ratingUpdated.emit({
            value: this.coffeeRating
        });
    }
}