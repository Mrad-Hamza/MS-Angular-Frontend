import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/product/all',
  },
  { path: 'all', component: AllproductsComponent },
  { path: 'viewproduct/:idProduct', component: ViewproductComponent },
]
 



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
