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
        //   role: ['',Validators.required],
        })
    }

    get username() {
        return this.addForm.get('username')
    }
    get email() {
        return this.addForm.get('email')
    }
    get password() {
        return this.addForm.get('password')
    }
    get birthdate() {
        return this.addForm.get('birthdate')
    }
    get phoneNumber() {
        return this.addForm.get('phoneNumber')
    }
    get address() {
        return this.addForm.get('address')
    }
    // get role() {
    //     return this.addForm.get('role')
    // }

    submit() {
        console.log(this.addForm.value);
        this.initialValue.username = this.addForm.value.username;
        this.initialValue.email = this.addForm.value.email;
        this.initialValue.password = this.addForm.value.password;
        this.initialValue.birthdate = this.addForm.value.birthdate;
        this.initialValue.phoneNumber = this.addForm.value.phoneNumber;
        this.initialValue.address = this.addForm.value.address;
        // this.initialValue.role = this.addForm.value.role;
        this.user.emit(this.initialValue)
        console.log(this.initialValue)
    }


}
