import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { AllStocksComponent } from './all-stocks/all-stocks.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';


@NgModule({
  declarations: [AllStocksComponent, AddStockComponent, EditStockComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
