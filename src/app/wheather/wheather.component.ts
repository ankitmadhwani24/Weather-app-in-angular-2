import { Component, OnInit } from '@angular/core';
import { CityListService } from '../city-list.service';
import { Http } from '@angular/http';
import { City } from '../city';
import { CityData } from '../cityData';
import { WheaterDetailsService } from '../wheater-details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {
  cityNames: City[];
  public cityDatas : CityData;
  mode = 'Observable';

 constructor (private cityList: CityListService, private wheather: WheaterDetailsService, private router: Router) {}
  ngOnInit() {
     this.cityData();
    //  for getting city id and send it to api
      this.cityDatas = {
          name: ''
      }
   }
  cityData() {
    this.cityList.getCityName()
                     .subscribe(cityNames => this.cityNames = cityNames);
  }
  save(f: CityData, isValid: boolean) {
    if(f.name != null && f.name != undefined) {
        this.wheather.getwheatherDetails(f.name);
        // var date  =  new Date();
        // console.log(date);
        this.router.navigate(['/showwheather']);
    }
  }
}
