import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '@app/Models/Person';
import { PersonServiceService } from '../service/person-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sb-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
    
    initialValue: Person = new Person;
    addForm !: FormGroup;
    @Output() person: EventEmitter<Person> = new EventEmitter<Person>();

    constructor(private fb: FormBuilder,private personService: PersonServiceService) { }

    ngOnInit(): void {
        this.initializeForm()
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

    get name() {
        return this.addForm.get('name')
    }
    get last_name() {
        return this.addForm.get('last_name')
    }
    get birth_date() {
        return this.addForm.get('birth_date')
    }
    get role() {
        return this.addForm.get('role')
    }
    get source() {
        return this.addForm.get('source')
    }


    submit() {
        console.log(this.addForm.value);
        this.initialValue.name = this.addForm.value.name;
        this.initialValue.last_name = this.addForm.value.last_name;
        this.initialValue.birth_date = this.addForm.value.birth_date;
        this.initialValue.source = this.addForm.value.source;
        this.initialValue.role = this.addForm.value.role;
        this.person.emit(this.initialValue)
    }

}
