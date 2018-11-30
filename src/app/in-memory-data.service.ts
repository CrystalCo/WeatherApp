import { InMemoryDbService } from 'angular-in-memory-web-api';
import { City } from './city';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cities = [
      { id: 1000, name: 'Auckland' },
      { id: 2000, name: 'Belgrade' },
      { id: 3000, name: 'Brisbane' },
      { id: 4000, name: 'Frankfurt' },
      { id: 5000, name: 'New Delhi' },
      { id: 6000, name: 'Kings Landing' },
      { id: 7000, name: 'Paris' },
      { id: 8000, name: 'Sao Paulo' },
      { id: 9000, name: 'Tokyo' },
      { id: 10000, name: 'Moscow' }
    ];
    return {cities};
  }

  // Overrides the genId method to ensure that a city always has an id.
  // If the cities array is empty,
  // the method below returns the initial number (1000).
  // if the cities array is not empty, the method below returns the highest
  // city id + 1.
  genId(cities: City[]): number {
    return cities.length > 0 ? Math.max(...cities.map(city => city.id)) + 1000 : 10000;
  }
}