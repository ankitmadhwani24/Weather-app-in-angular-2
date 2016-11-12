import { Component, OnInit } from '@angular/core';
import { WheaterDetailsService } from '../wheater-details.service';
import { CityData } from '../cityData';

@Component({
  selector: 'app-show-wheather',
  templateUrl: './show-wheather.component.html',
  styleUrls: ['./show-wheather.component.css']
})
export class ShowWheatherComponent implements OnInit {

  showCityWh: CityData[];
  constructor(private wheathershow: WheaterDetailsService) { }

  ngOnInit() {
      this.showFx();
  }

  showFx() {
      this.wheathershow.getwheatherDetails()
                        .subscribe(showCityWh => this.showCityWh = showCityWh);
  }
}
