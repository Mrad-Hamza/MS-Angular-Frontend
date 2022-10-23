import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@app/Models/Product';
import { Stock } from '@app/Models/Stock';
import { StockService } from '@modules/stock/service/stock.service';
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
  stocks !: Stock[];
  addStockClicked: boolean = false;
  id!:any;
  idProduct: any;
  stock!:Stock;


  constructor(public productservice: ProductService, public router: Router, public stockService: StockService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.fetchProductData();
    this.fetchStockData();
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

  fetchStockData() {
    this.stockService.getAll().subscribe(
      (d) => {
        this.stocks = d;
        console.log(this.stocks)
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

  add(product: Product, id:number) {
    console.log("id", this.id);
    this.id = this.route.snapshot.paramMap.get('idStock')!;
    console.log("iddd", this.id);
    this.productservice.add(product,product.stock.idStock).subscribe(
      (d) => {
        this.fetchProductData();
        console.log("added with success ")
      },
      (error) => {
        console.log("eroooooooor :(")
      }
    );
  }

  addEventButtonClicked() {
    this.addStockClicked = !this.addStockClicked
  }
  navigateToProduct(p: Product) {
    console.log(p + "nnn")
    this.router.navigate(['/product/viewproduct/' + p.idProduct])
  }

}
