import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
        .subscribe(cities => this.cities = cities.slice(1, 5));
  }

}
