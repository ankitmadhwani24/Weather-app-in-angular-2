import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import { City } from './city';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CityListService {
    cityArray = [];
    constructor(private http: Http) {}
          getCityName (): Observable<City[]> {
                return this.http.get('app/city_list.json')
                                .map(this.extractData)
                               
          }
          private extractData(res: Response) {
              let body = res.json();
              console.log(body);
              return body;
          }
}
