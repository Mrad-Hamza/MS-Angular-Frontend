import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '@app/Models/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'sb-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {
  @Input() product !: Product
  submitted: boolean = false;
  addForm !: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.addForm = fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    console.log(this.product)
    this.initializeForm()
  }

  onSubmit() {

    this.productService.update(this.product, this.product.idProduct).subscribe(
      (d) => {
        setTimeout(() => {
          this.router.navigate(['/product/all']);
        }, 800);
      }
      
    )
    console.log(this.product)
    console.log("testtest")
  }

  initializeForm(): void {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
}
