import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPurchasesComponent } from './all-purchases/all-purchases.component';
import { ViewPurchaseComponent } from './view-purchase/view-purchase.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/purchase/all',
    },
    { path: 'all', component: AllPurchasesComponent },
    { path: 'viewPurchase/:id', component: ViewPurchaseComponent },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/purchase/all',
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
