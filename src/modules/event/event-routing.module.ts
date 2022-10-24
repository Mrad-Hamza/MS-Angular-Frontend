import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEventsComponent } from './all-events/all-events.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/event/all',
    },
    { path: 'all', component: AllEventsComponent },
    { path: 'viewEvent/:id', component: ViewEventComponent },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/event/all',
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
