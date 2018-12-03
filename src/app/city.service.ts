import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { City } from './city';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CityService {

  private citiesUrl = 'api/cities';  // URL to web api
  // private weatherUrl = `api.openweathermap.org/data/2.5/forecast?q=${city.name},${country-code}`;
  // private weatherIdUrl = `api.openweathermap.org/data/2.5/forecast?id=${city.id}`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
  /** GET cities from the server */
  getCities (): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl)
    .pipe(
      tap(_ => this.log('fetched cities')),
      catchError(this.handleError('getCities', []))
    );
  }
  
  /** GET city by id. Return 'Undefined' when id not found */
  getCityNo404<Data>(id: number): Observable<City> {
    const url = `${this.citiesUrl}/${id}`;
    return this.http.get<City[]>(url)
    .pipe(
      map(cities => cities[0]), // returns a {0|1} element array
      tap(c => {
        const outcome = c ? `fetched` : `did not find`;
        this.log(`${outcome} city id=${id}`);
      }),
      catchError(this.handleError<City>(`getCity id=${id}`))
    );
  }

  /** GET city by id.  Will 404 if if not found */
  getCity(id: number): Observable<City> {
    const url = `${this.citiesUrl}/${id}`;
    return this.http.get<City>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<City>(`getCity id=${id}`))
    );
  }

  /* GET cities whose name contains search term */
  searchCities(term: string): Observable<City[]> {
    if (!term.trim()) {
      // TO DO: if not search term, return 60661 zip code weather. Rn empty city array is returned.
      return of([]);
    }
    return this.http.get<City[]>(`${this.citiesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found cities matching "${term}"`)),
      catchError(this.handleError<City[]>('searchCities', []))
    );
  }

  ////// Save Methods //////

  /** PUT: update the city on the server */
  updateCity (city: City): Observable<any> {
    return this.http.put(this.citiesUrl, city, httpOptions).pipe(
      tap(_ => this.log(`updated city id=${city.id}`)),
      catchError(this.handleError<any>('updateCity'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CityService: ${message}`);
  }
}
  