import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'app/login-service.service';
import { Projects } from 'app/Projects';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

   projects :Projects[] |undefined;

  // public tableData4: TableData;

  constructor(private svc : LoginserviceService) { }

  ngOnInit(): void {
    this.svc.getProjects().subscribe((response)=>{
      this.projects=response;
      console.log(response);
    })



  //   this.tableData4 = {
  //     headerRow: ['Id', 'Project Name', 'Planed Start Date', 'Planed End Date', 'Actual Start Date', 'Actual End Date', 'Description'],
  //     dataRows: [
  //         ['1','Online Meeting Scheduling','2021-02-01','2021-03-01','2021-02-02','2021-03-03','Compay Requirement Want to organize meetins online'],
  //         ['2','Online Interview Scheduling','2022-05-10','2022-05-12','2022-05-10','2022-05-13','We want to arrangement hiring of new employees for new projects']

  //     ]
  // };

  }

}
