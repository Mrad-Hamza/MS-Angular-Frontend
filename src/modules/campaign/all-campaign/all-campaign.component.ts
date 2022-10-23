import { Component, OnInit } from '@angular/core';
import { CampaignMarketing } from '@app/Models/CampaignMarketing';
import { CampaignService } from '../service/campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-all-campaign',
  templateUrl: './all-campaign.component.html',
  styleUrls: ['./all-campaign.component.scss']
})
export class AllCampaignComponent implements OnInit {

    addClicked: Boolean = false;
    campaigns?: CampaignMarketing[];
    campaign !: CampaignMarketing;

    constructor(public campaignMarketingService: CampaignService, public route: Router) { }

    ngOnInit(): void {
        this.fetchCampaignMarketingData()
    }

    addButtonClicked() {
        console.log(this.addClicked)
        this.addClicked = !this.addClicked;
    }

    fetchCampaignMarketingData() {
        this.campaignMarketingService.getAll().subscribe(
            (d) => {
                this.campaigns = d;
                console.log(this.campaigns)
            },
            (error) => {
                console.log("aaaaaaaaaaerreur :(")
            }
        );
    }

    delete(p: CampaignMarketing) {
        this.campaignMarketingService.delete(p._id).subscribe(
            (d) => {
                this.fetchCampaignMarketingData()
            }
        );
    }

    navigateToPurchase(p: CampaignMarketing) {
        console.log(p)
        this.route.navigate(['/campaign/viewCampaign/' + p._id])
    }

    add(purchase: CampaignMarketing) {
        this.campaignMarketingService.add(purchase).subscribe(
            (d) => {
                this.fetchCampaignMarketingData();
                console.log("succes ajout")
            },
            (error) => {
                console.log("erreur images :(")
            }
        );
    }


}
