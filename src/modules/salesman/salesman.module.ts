import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesmanRoutingModule } from './salesman-routing.module';
import { AllSalesmansComponent } from './all-salesmans/all-salesmans.component';
import { AddSalesmanComponent } from './add-salesman/add-salesman.component';
import { ViewSalesmanComponent } from './view-salesman/view-salesman.component';
import { UpdateSalesmanComponent } from './update-salesman/update-salesman.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationModule } from 'modules/navigation/navigation.module';

@NgModule({
  declarations: [AllSalesmansComponent, AddSalesmanComponent, ViewSalesmanComponent, UpdateSalesmanComponent],
  imports: [
    CommonModule,
    SalesmanRoutingModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalesmanModule { }
