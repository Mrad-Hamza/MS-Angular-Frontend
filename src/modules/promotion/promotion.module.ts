import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { AllPromotionsComponent } from './all-promotions/all-promotions.component';
import { UpdatePromotionComponent } from './update-promotion/update-promotion.component';
import { ViewPromotionComponent } from './view-promotion/view-promotion.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationModule } from 'modules/navigation/navigation.module';

@NgModule({
  declarations: [AddPromotionComponent, AllPromotionsComponent, UpdatePromotionComponent, ViewPromotionComponent],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PromotionModule { }
