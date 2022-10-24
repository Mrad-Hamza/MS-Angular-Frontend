import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCampaignComponent } from './all-campaign/all-campaign.component';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/campaign/all',
    },
    { path: 'all', component: AllCampaignComponent },
    { path: 'viewCampaign/:id', component: ViewCampaignComponent },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/Campaign/all',
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
