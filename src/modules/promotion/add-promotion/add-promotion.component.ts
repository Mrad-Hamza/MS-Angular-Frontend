import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PromotionService } from '../service/promotion.service';
import { Promotion } from '@app/Models/Promotion';

@Component({
  selector: 'sb-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.scss']
})
export class AddPromotionComponent implements OnInit {

    initialValue: Promotion = new Promotion;
    addForm !: FormGroup;
    @Output() promotion: EventEmitter<Promotion> = new EventEmitter<Promotion>();

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.initializeForm()
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            code: ['', Validators.required],
            percentage: ['', Validators.required],
        })
    }

    get code() {
        return this.addForm.get('code')
    }
    get percentage() {
        return this.addForm.get('percentage')
    }



    submit() {
        console.log(this.addForm.value);
        this.initialValue.code = this.addForm.value.code;
        this.initialValue.percentage = this.addForm.value.percentage;
        this.promotion.emit(this.initialValue)
    }


}
