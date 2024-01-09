import { Component } from '@angular/core';

@Component({
  selector: 'app-salaryprocessing',
  templateUrl: './salaryprocessing.component.html',
  styleUrls: ['./salaryprocessing.component.css']
})
export class SalaryprocessingComponent {

// employeeId:number|undefined;
employeeId:number=0;
searchString:number=0;

onSearch(){
  this.employeeId=this.searchString
}
}
