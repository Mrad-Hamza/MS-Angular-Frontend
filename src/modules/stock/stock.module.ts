import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { AllstocksComponent } from './allstocks/allstocks.component';
import { AddstockComponent } from './addstock/addstock.component';
import { UpdatestockComponent } from './updatestock/updatestock.component';
import { NavigationModule } from 'modules/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AllstocksComponent, AddstockComponent, UpdatestockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StockModule { }
