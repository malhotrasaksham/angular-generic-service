import { Component, OnInit } from '@angular/core';
import { GenericService } from './generic.service';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'employees',
  template: `<h2>List of employees</h2>
              <ul>
                  <li *ngFor="let employee of employees | async">{{employee.first_name}} {{employee.last_name}}</li>
              </ul>`
})
export class EmployeesComponent implements OnInit {
  employees: Observable<Employee[]>;
  constructor(private _employeeGS: GenericService<Employee>) { }

  ngOnInit() {
    this.employees = this._employeeGS.GetItems('employees');
  }

}
