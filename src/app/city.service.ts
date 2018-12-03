import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { City } from './city';
// import { CITIES } from './mock-cities';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CityService {

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

    /** GET city by id. Will 404 if id not found */
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

    updateCity (city: City): Observable<any> {
      return this.http.put(this.citiesUrl, city, httpOptions).pipe(
        tap(_ => this.log(`updated city id=${city.id}`)),
        catchError(this.handleError<any>('updateCity'))
      );
    }
    
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`CityService: ${message}`);
    }
    
  }
  