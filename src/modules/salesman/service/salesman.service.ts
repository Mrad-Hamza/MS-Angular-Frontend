import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salesman } from '@app/Models/Salesman';

const URI = "http://localhost:8090/SpringMVC/servlet/";


@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Salesman[]> {
        return this.http.get<Salesman[]>(URI + "getAllsalesmans");
    }

    getById(id: number): Observable<Salesman> {
        return this.http.get<Salesman>(URI + "getsalesmanById/" + id)
    }

    delete(id: number) {
        return this.http.delete<Salesman>(URI + "deletesalesman/" + id)
    }

    update(data: any, id: number) {
        return this.http.put<Salesman>(URI + "updatesalesman/" + id, data);
    }

    add(data: any): Observable<Salesman> {
        return this.http.post<Salesman>(URI + "addsalesman", data);
    }

    addClient(idC:number,idSalesman:number){
        return this.http.put<Salesman>(URI + "salesman/setClient/" + idC + "/" + idSalesman,{});
    }



}
