import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { City } from './city';
import { CITIES } from './mock-cities';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  getCities(): Observable<City[]> {
    return of(CITIES);
  }

  constructor() { }
}
