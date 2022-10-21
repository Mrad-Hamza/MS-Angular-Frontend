import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Promotion } from '@app/Models/Promotion';
import { Purchase } from '@app/Models/Purchase';
import { PurchaseService } from '../service/purchase.service';

@Component({
  selector: 'sb-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss']
})
export class AddPurchaseComponent implements OnInit {

    initialValue: Purchase = new Purchase;
    addForm !: FormGroup;
    @Output() purchase: EventEmitter<Purchase> = new EventEmitter<Purchase>();

    constructor(private fb: FormBuilder, private purchaseService: PurchaseService) { }


    ngOnInit(): void {
        this.initializeForm()
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            purchase_date: ['', Validators.required],
            value: ['', Validators.required],
            promotion: ['', Validators.required],
        })
    }

    get purchase_date() {
        return this.addForm.get('purchase_date')
    }
    get value() {
        return this.addForm.get('value')
    }
    get promotion() {
        return this.addForm.get('promotion')
    }




    submit() {
        console.log(this.addForm.value);
        this.initialValue.purchase_date = this.addForm.value.purchase_date;
        this.initialValue.value = this.addForm.value.value;
        this.initialValue.promotion = this.addForm.value.promotion;
        this.purchase.emit(this.initialValue)
    }

}
