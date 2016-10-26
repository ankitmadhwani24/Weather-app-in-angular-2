import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class CityListService {

  private cityData = 'city_list.json';
  constructor(private http : Http) { }

    getCityName() {
     console.log(this.http.request('/app/city_list.json'));
     
    return this.http.request('/app/city_list.json')
                 .map(res => res.json());
  }
}
