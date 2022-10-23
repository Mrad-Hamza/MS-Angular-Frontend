import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '@app/Models/Project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'sb-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {

  project !: Project;
  id:any;
  updateEtat: boolean = false;
  submitted: boolean = false;
  // taskClicked: boolean = false;
  // salesmans ?: Salesman[]
  // salesmanId: number=0

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
      this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.fetchProjectData(this.id);
  }

  fetchProjectData(idP: any) {
      this.projectService.getById(idP).subscribe(
          (p) => {
              this.project = p;
              console.log(this.project)
              console.log("succes")
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
  delete(p: Project) {
      this.projectService.delete(p.id).subscribe(
          (d) => {
              setTimeout(() => {
                  this.router.navigate(['/project/all']);
              }, 800);
          }
      );
  }

  // taskButtonClicked(){
  //     this.taskClicked=!this.taskClicked
  // }


  // fetchSalesmansData() {
  //     this.salesmanService.getAll().subscribe(
  //         (d) => {
  //             this.salesmans = d;
  //             console.log(this.salesmans)
  //         },
  //         (error) => {
  //             console.log("aaaaaaaaaaerreur :(")
  //         }
  //     );
  // }

}
