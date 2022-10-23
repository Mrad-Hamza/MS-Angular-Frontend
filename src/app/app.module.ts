import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersonModule } from '@modules/person/person.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesmanModule } from '../modules/salesman/salesman.module';
import { PromotionModule } from '../modules/promotion/promotion.module';
import { PurchaseModule } from '../modules/purchase/purchase.module';
import { PayrollModule } from '../modules/payroll/payroll.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, PersonModule, SalesmanModule, PromotionModule, PurchaseModule, PayrollModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
