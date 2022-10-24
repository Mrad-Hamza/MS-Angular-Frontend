import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@app/Models/Product';
import { Salesman } from '@app/Models/Salesman';
import { Stock } from '@app/Models/Stock';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'sb-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
  product !: Product;
  id: any;
  updateEtat: boolean = false;
  submitted: boolean = false;
  addClient: boolean = false;

  newClientId: number = 0;


  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.id = parseInt(this.route.snapshot.paramMap.get('idProduct')!);
    this.fetchProductData(this.id);
  }



  fetchProductData(idP: any) {
    this.productService.getById(idP).subscribe(
      (p) => {
        this.product = p;

        console.log(this.product)
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

  delete(p: Product) {
    this.productService.delete(p.idProduct).subscribe(
      (d) => {
        setTimeout(() => {
          this.router.navigate(['/product/all']);
        }, 800);
      }
    );
  }


}
