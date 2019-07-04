import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable()
export class GenericService<T> {
  //host: string = "http://localhost:3000/";

  constructor(private _http: HttpClient) { }

  GetItems(endpoint: string): Observable<T[]> {
    if (endpoint == 'cities')
      return of<T[]>([
        {
          "id": 1,
          "city_name": "Jaipur",
          "state_name": "Rajasthan"
        },
        {
          "id": 2,
          "city_name": "Ghaziabad",
          "state_name": "Uttar Pradesh"
        }
      ])
    else if (endpoint == 'employees')
      return of([
        {
          "id": 1,
          "first_name": "Sebastian",
          "last_name": "Eschweiler",
          "email": "sebastian@codingthesmartway.com"
        },
        {
          "id": 2,
          "first_name": "Steve",
          "last_name": "Palmer",
          "email": "steve@codingthesmartway.com"
        },
        {
          "id": 3,
          "first_name": "Ann",
          "last_name": "Smith",
          "email": "ann@codingthesmartway.com"
        }
      ])
    //return this._http.get<T[]>(this.host + endpoint);
  }

}