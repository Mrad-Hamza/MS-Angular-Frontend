import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CampaignMarketing } from '@app/Models/CampaignMarketing';

const URI ="http://localhost:5000/campaigns/"

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<CampaignMarketing[]> {
        return this.http.get<CampaignMarketing[]>(URI + "/");
    }

    getById(id: number): Observable<CampaignMarketing> {
        return this.http.get<CampaignMarketing>(URI + "/" + id)
    }

    delete(id: number) {
        return this.http.delete<CampaignMarketing>(URI + "/" + id)
    }

    update(data: any, id: number) {
        return this.http.put<CampaignMarketing>(URI + "/" + id, data);
    }

    add(data: any): Observable<CampaignMarketing> {
        return this.http.post<CampaignMarketing>(URI + "addCampaign", data);
    }
    addEvent(idC:any,idE:any) {
        return this.http.put<CampaignMarketing>(URI+"/addEvent/"+idC+"/"+idE,{});
    }

    getByDates(date1: any, date2: any): Observable<CampaignMarketing[]> {
        return this.http.get<CampaignMarketing[]>(URI + "/dates/" + date1 + "/" + date2)
    }

    getByTypes(canal: any, type: any): Observable<CampaignMarketing[]> {
        return this.http.get<CampaignMarketing[]>(URI + "/" + canal + "/" + type)
    }

}
