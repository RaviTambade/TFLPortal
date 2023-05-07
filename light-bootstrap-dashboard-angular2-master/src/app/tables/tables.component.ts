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
  }

}
