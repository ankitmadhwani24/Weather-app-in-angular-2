import { Component, OnInit } from '@angular/core';
import { CityListService } from '../city-list.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {

  cityNames;

  // constructor(cityList: CityListService) { 
  //   this.cityNames = cityList.getCityName(); 
  //   console.log(this.cityNames);
  // }

  ngOnInit() {
  }



    result: Object;
    constructor(http: Http) {
      // console.log("hi");
      
        this.result = {friends:[]};
        http.get('/app/city_list.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
        console.log(res);
        
  }

}
