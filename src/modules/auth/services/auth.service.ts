import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const URI = "http://localhost:8090/user";

@Injectable({
    providedIn:'root'
})
export class AuthService {
    username!:string;
    password!:string;
      
    constructor(private http:HttpClient) {}

    public login(username:string,password:string){
        const data={}
        const headers=new HttpHeaders({Authorization:'Basic'+btoa(username+":"+password)})
        return this.http.post(URI + "/signin",{headers,responseType:'text'as 'json'} )
    }
    }

    // getAuth$(): Observable<{}> {
    //     return of({});
    // }
