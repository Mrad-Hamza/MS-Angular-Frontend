import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '@app/Models/Task';
import { Observable } from 'rxjs';


const URI = 'http://localhost:8081/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
      return this.http.get<Task[]>(URI + '/retrieve-all-tasks');
  }

  getById(idTask: number): Observable<Task> {
      return this.http.get<Task>(URI + '/getTaskById/' + idTask);
  }

  delete(id: number) {
      return this.http.delete<Task>(URI + '/remove-task/' + id);
  }

  update(data: any, id: number) {
      return this.http.put<Task>(URI + '/modify-task/' + id, data);
  }

  add(data: any): Observable<Task> {
      return this.http.post<Task>(URI + '/add-task', data);
  }

  addProject(idP:any,idT:any) {
    return this.http.post<Task>(URI+"/affect-task/"+idP+"/"+idT,{});
}
}
