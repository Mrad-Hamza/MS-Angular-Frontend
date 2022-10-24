import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/employee/all',
},
{ path: 'all', component: AllEmployeeComponent },
{ path: 'view-employee/:id', component: ViewEmployeeComponent },
{ path: 'add-employee', component: AddEmployeeComponent },
{ path: 'update-employee/:id', component: UpdateEmployeeComponent },
{
    path: '**',
    pathMatch: 'full',
    redirectTo: '/employee/all',
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
