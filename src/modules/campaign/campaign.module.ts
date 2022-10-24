import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';
import { AllCampaignComponent } from './all-campaign/all-campaign.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationModule } from 'modules/navigation/navigation.module';

@NgModule({
  declarations: [UpdateCampaignComponent, AddCampaignComponent, ViewCampaignComponent, AllCampaignComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    NavigationModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CampaignModule { }
