import { Component, OnInit } from '@angular/core';
//import { Projects } from 'app/projects/Projects';
import { LoginserviceService } from 'app/login-service.service'; 

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;
    public tableData4: TableData;
    public tableData5: TableData;

    //projects :Projects[] |undefined;
    
    constructor(private svc :LoginserviceService) { }

  ngOnInit() {

    // this.svc.getProjects().subscribe((response)=>{
    //     this.projects=response;
    //     console.log(response);
    //   });


      this.tableData1 = {
          headerRow: [ 'User ID', 'Email', 'Contact Number','Password'],
          dataRows: [
              ['1', 'Rc@12345@gmail.com','7038548505', 'Rc@12345'],
              ['2', 'Akshay@12345@gmail.com', '7038548506', 'Ak@12345'],
              ['3', 'Rohit@12345@gmail.com', '7038548507', 'RG@12345'],
              ['4', 'Shubham@12345@gmail.com', '7038548515', 'ST@12345'],
              ['5', 'Abgay@12345@gmail.com', '7038548515', 'AN@12345']
            
          ]
      };

      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
          dataRows: [
            ['1','Rc@12345@gmail.com','7038548505','Rc@12345'],
            ['2','Akshay@12345@gmail.com','7038548506','Ak@12345'],
            ['3','Rohit@12345@gmail.com','7038548507','RG@12345'],
            ['4','Shubham@12345@gmail.com','7038548515','ST@12345'],
            ['5','Abgay@12345@gmail.com','7038548515','AN@12345']
              
          ]
      };
      this.tableData3 = {
        headerRow: [ 'Emp ID', 'First Name', 'Last Name', 'Birth Date', 'Hire Date', 'Contact Number', 'Email', 'Password'],
        dataRows: [
            ['1', 'Rushikesh','Chikane','1998-05-19','2023-02-01','7038548505','Rushi@12345@gmail.com', 'RC@12345'],
            ['2', 'Akshay','Tanpure','1998-05-11','2023-02-02','7038548506','Akshay@12345@gmail.com', 'AK@12345'],
            ['3', 'Rohit','Gore','1998-05-20','2023-02-11','7038548507','Rohit@12345@gmail.com', 'RG@12345'],
            ['4', 'Shubham','Teli','1998-05-29','2023-02-21','7038548515','Shubham@12345@gmail.com', 'ST@12345'],
            ['5', 'Abhay','Navale','1999-05-19','2021-02-01','7038548525','Abhay@12345@gmail.com', 'AN@12345']
          
        ]
    };

    //     this.tableData4 = {
    //     headerRow: ['Id', 'Project Name', 'Planed Start Date', 'Planed End Date', 'Actual Start Date', 'Actual End Date', 'Description'],
    //     dataRows: [
    //         ['1','Online Meeting Scheduling','2021-02-01','2021-03-01','2021-02-02','2021-03-03','Compay Requirement Want to organize meetins online'],
    //         ['2','Online Interview Scheduling','2022-05-10','2022-05-12','2022-05-10','2022-05-13','We want to arrangement hiring of new employees for new projects']

    //     ]
    // };

    


    this.tableData5 = {
        headerRow: ['Id','Task Name','Project Id','Description','Start Date','End Date'],
        dataRows: [
            ['1','Meeting Scheduling','1','Please arrange the meeting scheduling process quickly','2021-02-01','2021-02-03'],
            ['2','Interview Scheduling','2','Please arrange the interview scheduling process quickly','2022-05-08','2022-05-09']

        ]
    };



  }

}
