import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPromotionsComponent } from './all-promotions/all-promotions.component';
import { ViewPromotionComponent } from './view-promotion/view-promotion.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/promotion/all',
    },
    { path: 'all', component: AllPromotionsComponent },
    { path: 'viewPromotion/:id', component: ViewPromotionComponent },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/promotion/all',
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
