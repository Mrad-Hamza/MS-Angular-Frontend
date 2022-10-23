import { Component, OnInit, Input } from '@angular/core';
import { CampaignMarketing } from '@app/Models/CampaignMarketing';
import { CampaignService } from '../service/campaign.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'sb-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.scss']
})
export class UpdateCampaignComponent implements OnInit {

    @Input() campaign !: CampaignMarketing
    submitted: boolean = false;
    addForm !: FormGroup;

    constructor(private fb: FormBuilder, private campaignService: CampaignService, private router: Router) {
        this.addForm = this.fb.group({
            name: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            type: ['', Validators.required],
            canal: ['', Validators.required],
        })
    }

    ngOnInit(): void {
        this.initializeForm()
    }

    onSubmit() {

        this.campaignService.update(this.campaign, this.campaign._id).subscribe(
            (d) => {
                setTimeout(() => {
                    this.router.navigate(['/campaign/all']);
                }, 1000);
            }
            /*(error) => {
                console.log(this.rayon)
                console.log(error)
            } */
        )
    }

    get name() {
        return this.addForm.get('name')
    }
    get startDate() {
        return this.addForm.get('startDate')
    }
    get endDate() {
        return this.addForm.get('endDate')
    }
    get type() {
        return this.addForm.get('type')
    }
    get canal() {
        return this.addForm.get('canal')
    }


    initializeForm(): void {
        this.addForm = this.fb.group({
            name: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            type: ['', Validators.required],
            canal: ['', Validators.required],
        })
    }



}
