import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@app/Models/User';

const URI = "http://localhost:8090/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(URI + "/retrieve-all-users");
    }

    getById(id: number): Observable<User> {
        return this.http.get<User>(URI + "/retrieve-user/" + id)
    }

    delete(id:number){
        return this.http.delete<User>(URI+"/delete-user/"+id)
    }

    update(data: any, id: number) {
        return this.http.put<User>(URI+"/updateUser/" + id, data);
    }

    add(data: any): Observable<User> {
        return this.http.post<User>(URI+"/addUser", data);
    }
}
