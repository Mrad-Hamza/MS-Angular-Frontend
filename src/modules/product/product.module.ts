import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


@NgModule({
  declarations: [AddproductComponent, UpdateproductComponent, AllproductsComponent, ViewproductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
