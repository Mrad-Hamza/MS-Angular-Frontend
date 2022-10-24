import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@app/Models/Project';
import { Observable } from 'rxjs';

const URI = 'http://localhost:8081/project';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<Project[]> {
        return this.http.get<Project[]>(URI + '/retrieve-all-projects');
    }

    getById(id: number): Observable<Project> {
        return this.http.get<Project>(URI + '/getProjectById/' + id);
    }

    delete(id: number) {
        return this.http.delete<Project>(URI + '/remove-project/' + id);
    }

    update(data: any, id: number) {
        return this.http.put<Project>(URI + '/modify-project/' + id, data);
    }

    add(data: any): Observable<Project> {
        return this.http.post<Project>(URI + '/add-project', data);
    }

    // getBySalesmansId(id: number): Observable<Project[]> {
    //     return this.http.get<Project[]>(URI + 'getAllPersonsBySalesmanId/' + id);
    // }
}
