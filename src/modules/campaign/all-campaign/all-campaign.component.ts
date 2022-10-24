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

    searchCanal: string = "";
    searchType: string = "";
    typeOptions = ['Lead Generation', 'Push product/offer/event', 'Upselling', 'Customer Success']
    canalOptions = ['Social Media', 'Media', 'Billboards']

    date1!: Date;
    date2!: Date;

    constructor(public campaignMarketingService: CampaignService, public route: Router) { }

    ngOnInit(): void {
        this.fetchCampaignMarketingData()
    }


    test() {
        console.log(this.searchCanal, this.searchType)
        this.campaignMarketingService.getByTypes(this.searchCanal, this.searchType).subscribe(
            (d) => {
                this.campaigns = d
            }
        )
    }

    test2() {
        console.log(this.date1, this.date2)
        this.campaignMarketingService.getByDates(this.date1, this.date2).subscribe(
            (d) => {
                this.campaigns = d
            }
        )
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
