import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllstocksComponent } from './allstocks/allstocks.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/stock/all',
  },
  { path: 'all', component: AllstocksComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {
  
 }
