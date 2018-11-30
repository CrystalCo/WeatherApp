import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { City } from './city';
import { CITIES } from './mock-cities';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private messageService: MessageService) { }
  
  getCities(): Observable<City[]> {
    // TODO: send the message _after_ fetching the cities
  this.messageService.add('CityService: fetched cities');
    return of(CITIES);
  }

}
