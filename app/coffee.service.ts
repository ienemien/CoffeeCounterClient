import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Coffee } from './coffee';


@Injectable()
export class CoffeeService {
	private coffeeUrl = 'app/coffee';  // URL to web api
	
	private headers = new Headers({'Content-Type': 'application/json'});
	
	constructor(private http: Http) { }
  
	getCoffee(): Promise<Coffee[]> {
		return this.http.get(this.coffeeUrl)
				   .toPromise()
				   .then(response => response.json().data as Coffee[])
				   .catch(this.handleError);
			   }
	
	getCoffeeDetail(id: number): Promise<Coffee> {
	  return this.getCoffee()
				 .then(coffee => coffee.find(coffee => coffee.id === id));
	}
	
	update(coffee: Coffee): Promise<Coffee> {
	  const url = `${this.coffeeUrl}/${coffee.id}`;
	  return this.http
		.put(url, JSON.stringify(coffee), {headers: this.headers})
		.toPromise()
		.then(() => coffee)
		.catch(this.handleError);
	}
	
	create(name: string): Promise<Coffee> {
		return this.http
		  .post(this.coffeeUrl, JSON.stringify({name: name}), {headers: this.headers})
		  .toPromise()
		  .then(res => res.json().data)
		  .catch(this.handleError);
	  }
	
	delete(id: number): Promise<void> {
	  let url = `${this.coffeeUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}