import { Component, OnInit } from '@angular/core';
import { CityListService } from '../city-list.service';
import { Http } from '@angular/http';
import { City } from '../city';
import { CityData } from '../cityData';


@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {
  cityNames: City[];
  public cityDatas : CityData;
  mode = 'Observable';

 constructor (private cityList: CityListService) {}
  ngOnInit() {
     this.cityData();
    //  for getting city id and send it to api
      this.cityDatas = {
          id: ''
      }
   }
  cityData() {
    this.cityList.getCityName()
                     .subscribe(cityNames => this.cityNames = cityNames);
  }
  save(wheater: CityData, isValid: boolean) {
      console.log("wheater component")
    console.log(wheater);

  }
}
