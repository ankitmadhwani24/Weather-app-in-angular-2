import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class CityListService {
    cityArray : Array<Object>;
    constructor(private http: Http) {}
        getCityName(): any {
            // this.http.get('app/city_list.json')
            //   .map(res => {
            //      console.log(res.json())
            //   });
            //   .subscribe(data => {
            //       console.log(data.json())
            //     this.cityArray.push(data.json())
            //   });
             this.http.get('app/city_list.json')
                .map(response => response.json())
                  .subscribe(result => this.cityArray = result);
                  console.log(this.cityArray);
             return this.cityArray;
        }
}
