import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Coffee } from './coffee';

@Injectable()
export class CoffeeSearchService {
    constructor(private http:Http) {
    }

    search(term:string):Observable<Coffee[]> {
        return this.http
            .get(`app/coffee/?name=${term}`)
            .map((r:Response) => r.json().data as Coffee[]);
    }
}