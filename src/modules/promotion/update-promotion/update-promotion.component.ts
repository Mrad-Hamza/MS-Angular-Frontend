import { Component, OnInit, Input } from '@angular/core';
import { PromotionService } from '../service/promotion.service';
import { Promotion } from '@app/Models/Promotion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-update-promotion',
  templateUrl: './update-promotion.component.html',
  styleUrls: ['./update-promotion.component.scss']
})
export class UpdatePromotionComponent implements OnInit {

    @Input() promotion !: Promotion
    submitted: boolean = false;
    addForm !: FormGroup;

    constructor(private fb: FormBuilder, private promotionService: PromotionService, private router: Router) {
        this.addForm = fb.group({
            code: ['', Validators.required],
            percentage: ['', Validators.required]
        })
    }

    ngOnInit(): void {
        this.initializeForm()
    }

    onSubmit() {

        this.promotionService.update(this.promotion, this.promotion.id).subscribe(
               (d) => {
                setTimeout(() => {
                    this.router.navigate(['/promotion/all']);
                }, 1000);              },
            /*  (error) => {
                  console.log(this.rayon)
                  console.log(error)
              } */
        )
        console.log(this.promotion)
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            code: ['', Validators.required],
            percentage: ['', Validators.required]
        })
    }

}
