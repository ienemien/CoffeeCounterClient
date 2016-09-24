import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { CoffeeSearchService } from './coffee-search.service';
import { Coffee } from './coffee';
@Component({
  selector: 'coffee-search',
  templateUrl: 'app/coffee-search.component.html',
  styleUrls:  ['app/coffee-search.component.css'],
  providers: [CoffeeSearchService]
})
export class CoffeeSearchComponent implements OnInit {
  coffee: Observable<Coffee[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private coffeeSearchService: CoffeeSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.coffee = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.coffeeSearchService.search(term)
        // or the observable of empty coffee items if no search term
        : Observable.of<Coffee[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Coffee[]>([]);
      });
  }
  gotoDetail(coffee: Coffee): void {
    let link = ['/detail', coffee.id];
    this.router.navigate(link);
  }
}
