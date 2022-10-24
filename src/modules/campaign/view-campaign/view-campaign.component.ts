
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CampaignMarketing } from '@app/Models/CampaignMarketing';
import { Event } from '@app/Models/Event';
import { CampaignService } from '../service/campaign.service';
import { EventService } from '@modules/event/service/event.service';

@Component({
  selector: 'sb-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.scss']
})
export class ViewCampaignComponent implements OnInit {

    campaign !: CampaignMarketing;
    id: any;
    updateEtat: boolean = false;
    submitted: boolean = false;
    addClient: boolean = false;
    addEventClicked: boolean = false;
    events ?: Event[]
    eventId : number = 0;



    constructor(private route: ActivatedRoute, private campaignService: CampaignService, private router: Router, private eventService: EventService) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id')!;
        this.fetchCampaignData(this.id);
        this.fetchEventsData()
    }

    fetchCampaignData(idP: any) {
        this.campaignService.getById(idP).subscribe(
            (p) => {
                this.campaign = p;
                console.log(this.campaign)
                console.log("succes")
            },
            (error) => {
                console.log("erreur images :(")
            }
        )
    }

    fetchEventsData() {
        console.log("aaaaaaaaaaa")
        this.eventService.getAll().subscribe(
            (p) => {
                this.events = p;
                console.log(this.events)
                console.log("succes")
            },
            (error) => {
                console.log("erreur images :(")
            }
        )
    }

    update() {
        console.log(this.updateEtat)
        this.updateEtat = !this.updateEtat;
    }
    delete(p: CampaignMarketing) {
        this.campaignService.delete(p._id).subscribe(
            (d) => {
                setTimeout(() => {
                    this.router.navigate(['/campaign/all']);
                }, 800);
            }
        );
    }


    addEventButtonClicked() {
        this.addEventClicked = !this.addEventClicked
    }
    addEventToCampaign(){
        console.log(this.id)
        console.log(this.eventId)
        this.campaignService.addEvent(this.id,this.eventId).subscribe(
            ()=>{
                this.fetchCampaignData(this.id)
            }
        );
    }

}
