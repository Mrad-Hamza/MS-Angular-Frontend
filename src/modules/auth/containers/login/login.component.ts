import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services';
// import { AuthService } from '@modules/auth/services';
@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    
    username!:string;
    password!:string;
    errorMessage="Invalid Credentials";
    successMessage!:string;
    invalidLogin=false;
    loginSuccess=false;
    
    constructor(private authService: AuthService) {}
    ngOnInit(): void{}

    handleLogin(){
        let resp=this.authService.login(this.username,this.password);
        resp.subscribe((result)=>{
            this.invalidLogin=false;
            this.loginSuccess=true;
            this.successMessage='Login Successful';
            // redirect to mail page
        },()=>{
            this.invalidLogin=true;
            this.loginSuccess=false;
        });
    }
}
