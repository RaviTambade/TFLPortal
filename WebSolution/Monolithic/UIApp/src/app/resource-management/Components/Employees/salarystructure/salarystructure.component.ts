import { Component, OnInit } from '@angular/core';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { HrService } from 'src/app/shared/services/hr.service';

@Component({
  selector: 'app-salarystructure',
  templateUrl: './salarystructure.component.html',
  styleUrls: ['./salarystructure.component.css']
})
export class SalarystructureComponent implements OnInit{

  constructor(private hrService:HrService){}
  employeeId:number=10;
  salaryStructure:any;
  ngOnInit(): void {
    // this.employeeId=localStorage.getItem(LocalStorageKeys.employeeId);
    this.hrService.getSalaryStructure(this.employeeId).subscribe((res)=>{
    this.salaryStructure=res;
    console.log("🚀 ~ this.hrService.getSalaryStructure ~ res:", res);
    })
  }


}
