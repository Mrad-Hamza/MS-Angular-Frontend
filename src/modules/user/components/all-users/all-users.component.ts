import { Component, OnInit } from '@angular/core';
import { User } from '@app/Models/User';
import { UserService } from '@modules/user/service/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'sb-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  addClicked: Boolean = false;
    users ?: User[];
    user !: User;

    constructor(public UserService: UserService, public route: Router) { }

    ngOnInit(): void {
        this.fetchUsersData()
    }

    addButtonClicked() {
        this.addClicked = !this.addClicked;
    }

    fetchUsersData() {
        this.UserService.getAll().subscribe(
            (d) => {
                this.users = d;
                console.log(this.users)
            },
            (error) => {
                console.log("error :(")
            }
        );
    }

    delete(u: User) {
        this.UserService.delete(u.idUser).subscribe(
            (d)=>{
                this.fetchUsersData()
            }
        );
    }

    navigateToUser(u: User) {
        console.log(u + "sss")
        this.route.navigate(['/user/showUser/'+u.idUser])
    }

    add(user: User) {
        this.UserService.add(user).subscribe(
            (d) => {
                this.fetchUsersData();
                console.log("succes ajout")
            },
            (error) => {
                console.log("erreur images :(")
            }
        );
    }

}
