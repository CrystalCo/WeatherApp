import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';

@Input() city: City;

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
