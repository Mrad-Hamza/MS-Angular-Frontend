import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { ViewPurchaseComponent } from './view-purchase/view-purchase.component';
import { UpdatePurchaseComponent } from './update-purchase/update-purchase.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { AllPurchasesComponent } from './all-purchases/all-purchases.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationModule } from 'modules/navigation/navigation.module';


@NgModule({
  declarations: [ViewPurchaseComponent, UpdatePurchaseComponent, AddPurchaseComponent, AllPurchasesComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PurchaseModule { }
