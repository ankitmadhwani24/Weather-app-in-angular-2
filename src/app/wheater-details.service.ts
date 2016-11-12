import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Data } from './wheaterData';

@Injectable()
export class WheaterDetailsService {
    private wheatherReportURI;
    public error
    constructor(private http: Http) { }

     getwheatherDetails (cityname) {
         return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&APPID=208cd455230db654437e20e84e8573df")
                        //.map(this.extractwheaterData)
                        .subscribe(this.extractwheaterData);
                    //console.log(this.data);
                    //return
                        //return this.images;
                        //.catch(this.handleError);
     }
     private extractwheaterData(res: Response) {
         //console.log("gtr");
         let wBody = res.json();
         console.log(wBody);
        //  console.log(JSON.stringify(wBody))
         return wBody;
     }
     private handleError () {
         this.error = 'error'
         return this.error
     }
}
