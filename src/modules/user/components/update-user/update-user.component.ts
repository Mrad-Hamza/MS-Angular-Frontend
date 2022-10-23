import { Component, OnInit, Input, NgModule, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@app/Models/User';
import { UserService } from '@modules/user/service/user.service';

@Component({
  selector: 'sb-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  @Input() user !: User
    submitted: boolean = false;
    addForm !: FormGroup;

    constructor(private fb: FormBuilder,private userService: UserService,private router:Router) {
      this.addForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: [''],
        birthdate: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        address: ['', Validators.required],
      })
     }

    ngOnInit(): void {
        console.log(this.user)
        this.initializeForm()
    }

    onSubmit() {

        this.userService.update(this.user, this.user.idUser).subscribe(
             (d) => {
                setTimeout(() => {
                    this.router.navigate(['/user/all']);
                }, 800);
            }
            /*(error) => {
                console.log(this.rayon)
                console.log(error)
            } */
        )
        console.log(this.user)
        console.log("testtest")
    }

    initializeForm(): void {
      this.addForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: [''],
        birthdate: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        address: ['', Validators.required],
      })
    }

}
