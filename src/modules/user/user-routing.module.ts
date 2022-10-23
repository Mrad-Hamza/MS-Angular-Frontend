import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { ShowUserComponent } from './components/show-user/show-user.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/user/all',
    },
    { path: 'all', component: AllUsersComponent },
    { path: 'showUser/:id', component: ShowUserComponent },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/user/all',
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }