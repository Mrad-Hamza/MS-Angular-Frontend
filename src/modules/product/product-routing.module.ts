import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/product/all',
  },
  { path: 'all', component: AllproductsComponent },
]
 



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
