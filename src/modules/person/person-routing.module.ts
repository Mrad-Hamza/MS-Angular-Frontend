import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPersonsComponent } from './all-persons/all-persons.component';
import { ViewPersonComponent } from './view-person/view-person.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/person/all',
    },
    { path: 'all', component: AllPersonsComponent },
    { path: 'viewPerson/:id', component: ViewPersonComponent },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/person/all',
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
