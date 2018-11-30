import { Component, OnInit } from '@angular/core';

// import { Forecast } from '../forecast';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {  
  cities: City[];
  
  constructor(private cityService: CityService) { }
  
  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
    .subscribe(cities => this.cities = cities);
  }

}
