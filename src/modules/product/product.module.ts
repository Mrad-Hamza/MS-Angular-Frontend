import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { NavigationModule } from '@modules/navigation/navigation.module';


@NgModule({
  declarations: [AddproductComponent, UpdateproductComponent, AllproductsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NavigationModule
  ]
})
export class ProductModule { }
