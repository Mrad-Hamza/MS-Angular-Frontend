import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../service/promotion.service';
import { Promotion } from '@app/Models/Promotion';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sb-view-promotion',
  templateUrl: './view-promotion.component.html',
  styleUrls: ['./view-promotion.component.scss']
})
export class ViewPromotionComponent implements OnInit {

    promotion !: Promotion;
    id: any;
    updateEtat: boolean = false;
    submitted: boolean = false;

    constructor(private route: ActivatedRoute, private promotionService: PromotionService, private router: Router) { }

    ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
        this.fetchPromotionData(this.id);
    }

    fetchPromotionData(idP: any) {
        this.promotionService.getById(idP).subscribe(
            (p) => {
                this.promotion = p;
                console.log(this.promotion)
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
    delete(p: Promotion) {
        this.promotionService.delete(p.id).subscribe(
            (d) => {
                setTimeout(() => {
                    this.router.navigate(['/promotion/all']);
                }, 800);
            }
        );
    }


}
