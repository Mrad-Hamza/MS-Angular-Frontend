import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@app/Models/Product';
import { Stock } from '@app/Models/Stock';
import { StockService } from '@modules/stock/service/stock.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'sb-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  initialValue: Product = new Product;
  id: any;

  stocks !: any;
  stock!:Stock;
  addProductClicked: boolean = false;
  addForm !: FormGroup;
  @Output() product: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private fb: FormBuilder, private productservice: ProductService, private stockService: StockService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.initializeForm();
    this.fetchStockData();

  }

  initializeForm(): void {
    this.addForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      stock:['',Validators.required]

    })
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


  get code() {
    return this.addForm.get('code')
  }
  get name() {
    return this.addForm.get('name')
  }
  get price() {
    return this.addForm.get('price')
  }
  get description() {
    return this.addForm.get('description')
  }
  
  get idStock() {
    return this.addForm.get('idStock')
  }


  addProductButtonClicked() {
    this.addProductClicked = !this.addProductClicked
  }

  submit() {
    console.log(this.addForm.value);
    this.initialValue.code = this.addForm.value.code;
    this.initialValue.name = this.addForm.value.name;
    this.initialValue.price = this.addForm.value.price;
    this.initialValue.description = this.addForm.value.description;
    this.initialValue.stock =this.addForm.value.idStock;

    this.product.emit(this.initialValue)
  }
}
