import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { AllPayrollComponent } from './all-payroll/all-payroll.component';

import { NavigationModule } from 'modules/navigation/navigation.module';
import { ViewPayrollComponent } from './view-payroll/view-payroll.component';
import { UpdatePayrollComponent } from './update-payroll/update-payroll.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPayrollComponent } from './add-payroll/add-payroll.component';

@NgModule({
  declarations: [AllPayrollComponent, ViewPayrollComponent, UpdatePayrollComponent, AddPayrollComponent],
  imports: [
    CommonModule,
    PayrollRoutingModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class PayrollModule { }
