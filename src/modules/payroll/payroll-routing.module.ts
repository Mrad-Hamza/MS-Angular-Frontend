import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPayrollComponent } from './add-payroll/add-payroll.component';
import { AllPayrollComponent } from './all-payroll/all-payroll.component';
import { UpdatePayrollComponent } from './update-payroll/update-payroll.component';
import { ViewPayrollComponent } from './view-payroll/view-payroll.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/payroll/all',
    },
    { path: 'all', component: AllPayrollComponent },
    { path: 'view-payroll/:id', component: ViewPayrollComponent },
    { path: 'add-payroll', component: AddPayrollComponent },
    { path: 'update-payroll/:id', component: UpdatePayrollComponent },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/payroll/all',
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
