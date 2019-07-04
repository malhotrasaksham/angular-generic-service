import { Component, OnInit } from '@angular/core';
import { GenericService } from './generic.service';
import { City } from './city.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'cities',
  template: `<h2>List of cities</h2>
              <ul>
                  <li *ngFor="let city of cities | async">{{city.city_name}} - {{city.state_name}}</li>
              </ul>`
})
export class CitiesComponent implements OnInit {
  cities: Observable<City[]>;
  constructor(private _cityGS: GenericService<City>) { }

  ngOnInit() {
    this.cities = this._cityGS.GetItems('cities');
  }
}
