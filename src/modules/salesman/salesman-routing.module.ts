import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSalesmansComponent } from './all-salesmans/all-salesmans.component';
import { ViewSalesmanComponent } from './view-salesman/view-salesman.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/salesman/all',
    },
    { path: 'all', component: AllSalesmansComponent },
    { path: 'viewSalesman/:id', component: ViewSalesmanComponent },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/salesman/all',
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesmanRoutingModule { }
