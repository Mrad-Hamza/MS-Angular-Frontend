import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Salesman } from '@app/Models/Salesman';
import { SalesmanService } from '../service/salesman.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sb-update-salesman',
  templateUrl: './update-salesman.component.html',
  styleUrls: ['./update-salesman.component.scss']
})
export class UpdateSalesmanComponent implements OnInit {

    @Input() salesman !: Salesman
    submitted: boolean = false;
    addForm !: FormGroup;

    constructor(private fb: FormBuilder, private salesmanService: SalesmanService, private router : Router) {
        this.addForm = fb.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            bonus: ['', Validators.required],
            salary: ['', Validators.required],
            phone_numver: ['', Validators.required],
        })
     }

    ngOnInit(): void {
        this.initializeForm()
    }

    onSubmit() {

        this.salesmanService.update(this.salesman, this.salesman.id).subscribe(
               (d) => {
                setTimeout(() => {
                    this.router.navigate(['/salesman/all']);
                }, 1000);
              }
              /*(error) => {
                  console.log(this.rayon)
                  console.log(error)
              } */
        )
        console.log(this.salesman)
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            bonus: ['', Validators.required],
            salary: ['', Validators.required],
            phone_numver: ['', Validators.required],
        })
    }

}
