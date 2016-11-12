import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Data } from './wheaterData';

@Injectable()
export class WheaterDetailsService {
    public error;
    cityname;
    constructor(private http: Http) { }

     getwheatherDetails () {
         this.cityname = localStorage.getItem('cityname')
         return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+this.cityname+"&APPID=208cd455230db654437e20e84e8573df&units=metric")
                        //.map(this.extractwheaterData)
                        .map(this.extractwheaterData);
                    //console.log(this.data);
                    //return
                        //return this.images;
                        //.catch(this.handleError);
     }
     private extractwheaterData(res: Response) {
         let wBody = res.json();
        //  console.log(wBody);
         //console.log(JSON.stringify(wBody))
         return wBody;
     }
    //  private handleError () {
    //      this.error = 'error'
    //      return this.error
    //  }
}
