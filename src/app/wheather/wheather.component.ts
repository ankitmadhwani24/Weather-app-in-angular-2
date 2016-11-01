import { Component, OnInit } from '@angular/core';
import { CityListService } from '../city-list.service';
import { Http } from '@angular/http';
import { City } from '../city';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {
  cityNames: City[];
  mode = 'Observable';

 constructor (private cityList: CityListService) {}
  ngOnInit() { this.cityData(); }
  cityData() {
    this.cityList.getCityName()
                     .subscribe(
                       cityNames => this.cityNames = cityNames);
    console.log(this.cityNames);
    
  }
}
