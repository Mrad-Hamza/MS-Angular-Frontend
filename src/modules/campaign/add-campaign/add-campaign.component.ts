import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampaignMarketing } from '@app/Models/CampaignMarketing';
import { CampaignService } from '../service/campaign.service';

@Component({
  selector: 'sb-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss']
})
export class AddCampaignComponent implements OnInit {


    initialValue: CampaignMarketing = new CampaignMarketing;
    addForm !: FormGroup;
    @Output() campaign: EventEmitter<CampaignMarketing> = new EventEmitter<CampaignMarketing>();

    constructor(private fb: FormBuilder, private campaignService: CampaignService) { }

    ngOnInit(): void {
        this.initializeForm()
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




    submit() {
        console.log(this.addForm.value);
        this.initialValue.name = this.addForm.value.name;
        this.initialValue.startDate = this.addForm.value.startDate;
        this.initialValue.endDate = this.addForm.value.endDate;
        this.initialValue.type = this.addForm.value.type;
        this.initialValue.canal = this.addForm.value.canal;
        this.campaign.emit(this.initialValue)
    }


}
