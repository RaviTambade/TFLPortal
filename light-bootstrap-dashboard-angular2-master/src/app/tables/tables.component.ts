import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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
            ['1', 'Rc@12345@gmail.com','7038548505', 'Rc@12345'],
            ['2', 'Akshay@12345@gmail.com', '7038548506', 'Ak@12345'],
            ['3', 'Rohit@12345@gmail.com', '7038548507', 'RG@12345'],
            ['4', 'Shubham@12345@gmail.com', '7038548515', 'ST@12345'],
            ['5', 'Abgay@12345@gmail.com', '7038548515', 'AN@12345']
              
          ]
      };
      this.tableData3 = {
        headerRow: [ 'Emp ID', 'First Name','Last Name','Birth Date','Hire Date', 'Contact Number','Email','Password'],
        dataRows: [
            ['1', 'Rushikesh','Chikane','1998-05-19','2023-02-01','7038548505','Rushi@12345@gmail.com', 'RC@12345'],
            ['2', 'Akshay','Tanpure','1998-05-11','2023-02-02','7038548506','Akshay@12345@gmail.com', 'AK@12345'],
            ['3', 'Rohit','Gore','1998-05-20','2023-02-11','7038548507','Rohit@12345@gmail.com', 'RG@12345'],
            ['4', 'Shubham','Teli','1998-05-29','2023-02-21','7038548515','Shubham@12345@gmail.com', 'ST@12345'],
            ['5', 'Abhay','Navale','1999-05-19','2021-02-01','7038548525','Abhay@12345@gmail.com', 'AN@12345']
          
        ]
    };



  }

}
