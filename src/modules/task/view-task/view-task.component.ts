import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '@app/Models/Project';
import { Task } from '@app/Models/Task';
import { ProjectService } from '@modules/project/service/project.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'sb-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  task !: Task;
  id:any;
  updateEtat: boolean = false;
  projects ?: Project[]
  projectId: number=0

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router, private projectService: ProjectService) { }

  ngOnInit(): void {
      this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.fetchTaskData(this.id);
      this.fetchProjectsData();
      console.log(this.id);
  }

  fetchTaskData(idP: any) {
      this.taskService.getById(idP).subscribe(
          (p) => {
              this.task = p;
              console.log(this.task)
              console.log("succeeees")
          },
          (error) => {
              console.log("erreur images :(")
          }
      )
  }


  update() {
      console.log(this.updateEtat)
      this.updateEtat = !this.updateEtat;
  }
  delete(p: Task) {
      this.taskService.delete(p.taskId).subscribe(
          (d) => {
              setTimeout(() => {
                  this.router.navigate(['/task/all']);
              }, 800);
          }
      );
  }

  fetchProjectsData() {
      this.projectService.getAll().subscribe(
          (d) => {
              this.projects = d;
              console.log(this.projects)
          },
          (error) => {
              console.log("aaaaaaaaaaerreur :(")
          }
      );
  }

  addTaskToProject(){
    console.log(this.id)
    console.log(this.projectId)
    this.taskService.addProject(this.projectId,this.id).subscribe(
        ()=>{
            this.fetchTaskData(this.id)
        }
    );
}



}
