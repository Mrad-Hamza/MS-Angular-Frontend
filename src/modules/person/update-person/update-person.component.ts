import { Component, OnInit, Input, NgModule, EventEmitter, Output } from '@angular/core';
import { Person } from '@app/Models/Person';
import { PersonServiceService } from '../service/person-service.service';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss']
})
export class UpdatePersonComponent implements OnInit {

    @Input() person !: Person
    submitted: boolean = false;
    addForm !: FormGroup;

    constructor(private fb: FormBuilder,private personService: PersonServiceService,private router:Router) {
        this.addForm = fb.group({
            name: ['', Validators.required],
            last_name: ['', Validators.required],
            birth_date: ['', Validators.required],
            role: ['', Validators.required],
            source: ['', Validators.required],
        })
     }

    ngOnInit(): void {
        console.log(this.person)
        this.initializeForm()
    }

    onSubmit() {

        this.personService.update(this.person, this.person.id).subscribe(
             (d) => {
                setTimeout(() => {
                    this.router.navigate(['/person/all']);
                }, 800);
            }
            /*(error) => {
                console.log(this.rayon)
                console.log(error)
            } */
        )
        console.log(this.person)
        console.log("testtest")
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            name: ['', Validators.required],
            last_name: ['', Validators.required],
            birth_date: ['', Validators.required],
            role: ['', Validators.required],
            source: ['', Validators.required],
        })
    }
}
