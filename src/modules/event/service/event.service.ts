import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '@app/Models/Event';

const URI = "http://localhost:5000/events"

@Injectable({
  providedIn: 'root'
})
export class EventService {

    constructor(private http: HttpClient) { }


    getAll(): Observable<Event[]> {
        return this.http.get<Event[]>(URI + "/");
    }

    getByDates(date1: any,date2: any): Observable<Event[]>{
        return this.http.get<Event[]>(URI+"/dates/"+date1+"/"+date2)
    }

    getByTypes(canal: any, type: any): Observable<Event[]> {
        return this.http.get<Event[]>(URI + "/" + canal + "/" + type)
    }

    getLastWeek(): Observable<Number> {
        return this.http.get<Number>(URI + "/lastWeek");
    }

    getLastMonth(): Observable<Number> {
        return this.http.get<Number>(URI + "/lastMonth");
    }

    getLastYear(): Observable<Number> {
        return this.http.get<Number>(URI + "/lastYear");
    }

    getById(id: number): Observable<Event> {
        return this.http.get<Event>(URI + "/" + id)
    }

    delete(id: number) {
        return this.http.delete<Event>(URI + "/" + id)
    }

    update(data: any, id: number) {
        return this.http.put<Event>(URI + "/" + id, data);
    }

    add(data: any): Observable<Event> {
        return this.http.post<Event>(URI + "/add", data);
    }
}
