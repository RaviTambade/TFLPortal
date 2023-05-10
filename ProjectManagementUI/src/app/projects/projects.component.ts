import { Component, OnInit } from '@angular/core';

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
  public tableData4: TableData;

  constructor() { }

  ngOnInit(): void {


    this.tableData4 = {
      headerRow: ['Id', 'Project Name', 'Planed Start Date', 'Planed End Date', 'Actual Start Date', 'Actual End Date', 'Description'],
      dataRows: [
          ['1','Online Meeting Scheduling','2021-02-01','2021-03-01','2021-02-02','2021-03-03','Compay Requirement Want to organize meetins online'],
          ['2','Online Interview Scheduling','2022-05-10','2022-05-12','2022-05-10','2022-05-13','We want to arrangement hiring of new employees for new projects']

      ]
  };

  }

}
