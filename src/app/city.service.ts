import { Injectable } from '@angular/core';
import { City } from './city';
import { CITIES } from './mock-cities';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  getCities(): City[] {
    return CITIES;
  }

  constructor() { }
}
