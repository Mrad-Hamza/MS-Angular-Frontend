import { Component, OnInit, Input } from '@angular/core';
import { Purchase } from '@app/Models/Purchase';
import { PurchaseService } from '../service/purchase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-update-purchase',
  templateUrl: './update-purchase.component.html',
  styleUrls: ['./update-purchase.component.scss']
})
export class UpdatePurchaseComponent implements OnInit {

    @Input() purchase !: Purchase
    submitted: boolean = false;
    addForm !: FormGroup;

    constructor(private fb: FormBuilder, private purchaseService: PurchaseService, private router: Router) {
        this.addForm = fb.group({
            purchase_date: ['', Validators.required],
            value: ['', Validators.required],
            promotiob: ['', Validators.required]
        })
    }

    ngOnInit(): void {
        this.initializeForm()
    }

    onSubmit() {

        this.purchaseService.update(this.purchase, this.purchase.id).subscribe(
            (d) => {
                setTimeout(() => {
                    this.router.navigate(['/purchase/all']);
                }, 1000);
            }
            /*(error) => {
                console.log(this.rayon)
                console.log(error)
            } */
        )
        console.log(this.purchase)
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            purchase_date: ['', Validators.required],
            value: ['', Validators.required],
            promotiob: ['', Validators.required]
        })
    }


}
