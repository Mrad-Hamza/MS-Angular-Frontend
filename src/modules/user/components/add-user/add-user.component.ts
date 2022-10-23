import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '@app/Models/User';
import { NgForm } from '@angular/forms';
import { Person } from '@app/Models/Person';
import { UserService } from '@modules/user/service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sb-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  initialValue: User = new User;
    addForm !: FormGroup;
    @Output() user: EventEmitter<User> = new EventEmitter<User>();

    constructor(private fb: FormBuilder,private userService: UserService) { }

    ngOnInit(): void {
        this.initializeForm()
    }
    initializeForm(): void {
        this.addForm = this.fb.group({
          username: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
          birthdate: ['', Validators.required],
          phoneNumber: ['', Validators.required],
          address: ['', Validators.required],
        })
    }

    get username() {
        return this.addForm.get('username')
    }
    get email() {
        return this.addForm.get('email')
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


    // submit() {
    //     console.log(this.addForm.value);
    //     this.initialValue.name = this.addForm.value.name;
    //     this.initialValue.last_name = this.addForm.value.last_name;
    //     this.initialValue.birth_date = this.addForm.value.birth_date;
    //     this.initialValue.source = this.addForm.value.source;
    //     this.initialValue.role = this.addForm.value.role;
    //     this.person.emit(this.initialValue)
    // }


}
