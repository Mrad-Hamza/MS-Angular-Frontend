import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@app/Models/Product';
import { Stock } from '@app/Models/Stock';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'sb-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {

  addClicked: Boolean = false;
  products?: Product[];
  product !: Product;

  constructor(public productservice: ProductService, public route: Router) { }

  ngOnInit(): void {
    this.fetchProductData();
  }

  addButtonClicked() {
    this.addClicked = !this.addClicked;
  }

  fetchProductData() {
    this.productservice.getAll().subscribe(
      (d) => {
        this.products = d;
        console.log(this.products)
      },
      (error) => {
        console.log("aaaaaaaaaaerreur :(")
      }
    );
  }

  delete(p: Product) {
    this.productservice.delete(p.idProduct).subscribe(
      (d) => {
        this.fetchProductData();
      }
    );
  }

  // navigateToSalesman(p: Stock) {
  //   console.log(p + "nnn")
  //   this.route.navigate(['/salesman/viewSalesman/' + p.idStock])
  // }

  add(product: Product, idProduct:number) {
    this.productservice.add(product, idProduct).subscribe(
      (d) => {
        this.fetchProductData();
        console.log("added with success ")
      },
      (error) => {
        console.log("erreur images :(")
      }
    );
  }

}
