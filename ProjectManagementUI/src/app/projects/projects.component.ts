import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'app/login-service.service';
import { Projects } from 'app/Projects';

// declare interface TableData {
//   headerRow: string[];
//   dataRows: string[][];
// }

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

   projects :Projects[] |undefined;

  constructor(private svc : LoginserviceService) { }

  ngOnInit(): void {
    this.svc.getProjects().subscribe((response)=>{
      this.projects=response;
      console.log(response);
    });

   
  }

}
