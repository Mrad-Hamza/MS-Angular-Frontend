import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllEmployeeComponent, ViewEmployeeComponent, UpdateEmployeeComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class EmployeeModule { }
