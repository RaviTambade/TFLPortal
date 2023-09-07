import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { EmployeeService } from 'src/app/services/employee.service';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects:Project[] |undefined;
  
   constructor(private svc: EmployeeService,private router:Router,private route:ActivatedRoute) {}
  
   ngOnInit(): void {
     this.svc.getAllProjects().subscribe(
       (response) => {
         this.projects = response;
         console.log(this.projects);
       })
       };
 
       onDetails(id: number){
         this.router.navigate(['./project-details', id]);
       }
 
 }
 