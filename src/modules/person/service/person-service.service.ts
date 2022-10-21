import { Injectable } from '@angular/core';
import { Person } from '@app/Models/Person';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const URI = "http://localhost:8090/SpringMVC/servlet/";

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Person[]> {
        return this.http.get<Person[]>(URI + "getAllPersons");
    }

    getById(id: number): Observable<Person> {
        return this.http.get<Person>(URI + "getPersonById/" + id)
    }

    delete(id:number){
        return this.http.delete<Person>(URI+"deletePerson/"+id)
    }

    update(data: any, id: number) {
        return this.http.put<Person>(URI+"updatePerson/" + id, data);
    }

    add(data: any): Observable<Person> {
        return this.http.post<Person>(URI+"addPerson", data);
    }

    getBySalesmansId(id:number):Observable<Person[]>{
        return this.http.get<Person[]>(URI +"getAllPersonsBySalesmanId/"+id)
    }
}
