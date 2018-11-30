import { Component, OnInit } from '@angular/core';
import { Forecast } from '../forecast';
import { Day } from '../day';
import { City } from '../city';
import { CITIES } from '../mock-cities';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {
  todays_date = new Date(2018, 11, 30);

  forecast: Forecast = {
    id: 100,
    name: 'Windy'
  };

  day: Day = {
    id: 1,
    name: 'Monday',
    date: this.todays_date
  };

  city: City = {
    id: 2000,
    name: 'Seoul'
  };

  cities = CITIES;
  selectedCity: City;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  onSelect(city: City): void {
    this.selectedCity = city;
  }
  
}
