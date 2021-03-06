import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import { City } from './city';
import { Data } from './wheaterData';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CityListService {
    //cityArray = [];
    private wheatherReportURI;
    constructor(private http: Http) {}
          getCityName (): Observable<City[]> {
                return this.http.get('assets/city_list.json')
                                .map(this.extractData)

          }
         // getwheatherDetails (): Observable<Data[]> {
              //console.log(cityname);
            //   this.wheatherReportURI =
             // console.log(this.wheatherReportURI)


              //return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&APPID=208cd455230db654437e20e84e8573df")
                             // .map(this.extractwheaterData)
                             // .catch(this.handleError);
          //}
          private extractData(res: Response) {
              let body = res.json();
              return body;
          }
        //   private extractwheaterData(res: Response) {
        //       console.log("gtr");
        //       let wBody = res.json();
        //       console.log(wBody);
        //   }

}
