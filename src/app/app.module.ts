import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { GenericService } from './generic.service';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employee.component';
import { CitiesComponent } from './cities.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, EmployeesComponent,
    CitiesComponent],
  providers: [GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
