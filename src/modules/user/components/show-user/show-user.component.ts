import { Component, OnInit } from '@angular/core';
import { User } from '@app/Models/User';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '@modules/user/service/user.service';

@Component({
  selector: 'sb-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  user !: User;
    id:any;

    constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.paramMap.get('idUser')!);
        this.fetchUserData(this.id);
    }

    fetchUserData(idU: any) {
        this.userService.getById(idU).subscribe(
            (p) => {
                this.user = p;
                console.log(this.user)
                console.log("succes")
            },
            (error) => {
                console.log("erreur images :(")
            }
        )
    }

    delete(u: User) {
        this.userService.delete(u.idUser).subscribe(
            (d) => {
                setTimeout(() => {
                    this.router.navigate(['/user/all']);
                }, 800);
            }
        );
    }


}
