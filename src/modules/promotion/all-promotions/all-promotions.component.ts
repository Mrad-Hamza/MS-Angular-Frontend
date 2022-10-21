import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from '../service/promotion.service';
import { Promotion } from '@app/Models/Promotion';

@Component({
  selector: 'sb-all-promotions',
  templateUrl: './all-promotions.component.html',
  styleUrls: ['./all-promotions.component.scss']
})
export class AllPromotionsComponent implements OnInit {

    addClicked: Boolean = false;
    promotions?: Promotion[];
    promotion !: Promotion;



    constructor(public promotionService: PromotionService, public route: Router) { }

    ngOnInit(): void {
        this.fetchPromotionData()
    }

    addButtonClicked() {
        this.addClicked = !this.addClicked;
    }

    fetchPromotionData() {
        this.promotionService.getAll().subscribe(
            (d) => {
                this.promotions = d;
                console.log(this.promotions)
            },
            (error) => {
                console.log("aaaaaaaaaaerreur :(")
            }
        );
    }

    delete(p: Promotion) {
        this.promotionService.delete(p.id).subscribe(
            (d) => {
                this.fetchPromotionData()
            }
        );
    }

    navigateToPromotion(p: Promotion) {
        console.log(p + "nnn")
        this.route.navigate(['/promotion/viewPromotion/' + p.id])
    }

    add(promotion: Promotion) {
        console.log("literally bro")
        this.promotionService.add(promotion).subscribe(
            (d) => {
                this.fetchPromotionData();
                console.log("succes ajout")
            },
            (error) => {
                console.log("erreur images :(")
            }
        );
    }

}
