import { Component, OnInit } from '@angular/core';

import { Forecast } from '../forecast';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {

  selectedCity: City;
  
  cities: City[];
  
  constructor(private cityService: CityService) { }
  
  ngOnInit() {
    this.getCities();
  }
  
  onSelect(city: City): void {
    this.selectedCity = city;
  }

  getCities(): void {
    this.cityService.getCities()
        .subscribe(cities => this.cities = cities);
  }

}
