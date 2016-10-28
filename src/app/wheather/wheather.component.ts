import { Component, OnInit } from '@angular/core';
import { CityListService } from '../city-list.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {

  cityNames;
  constructor(cityList: CityListService) {
    this.cityNames = cityList.getCityName();
        console.log(this.cityNames);
        // console.log(this.cityNames[0]);

  }

  ngOnInit() {
  }
}
