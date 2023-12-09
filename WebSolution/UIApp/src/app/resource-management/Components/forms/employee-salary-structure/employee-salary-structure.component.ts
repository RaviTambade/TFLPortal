import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SalaryStructure } from 'src/app/resource-management/Models/SalaryStructure';
import { HrService } from 'src/app/shared/services/hr.service';

@Component({
  selector: 'app-employee-salary-structure',
  templateUrl: './employee-salary-structure.component.html',
  styleUrls: ['./employee-salary-structure.component.css']
})
export class EmployeeSalaryStructureComponent {
  @Input() employeeId:number=0;
  
  constructor(private hrSvc :HrService){}
  
  salaryStructureForm=new FormGroup({
    employeeId:new FormControl(),
    basicSalary:new FormControl(),
    hra:new FormControl(),
    da:new FormControl(),
    lta:new FormControl(),
    variablePay:new FormControl(),
    deduction:new FormControl()
  });

  onSubmit(){
   let salaryStructure:SalaryStructure={
      employeeId: this.employeeId,
      basicSalary: this.salaryStructureForm.get("basicSalary")?.value,
      hra: this.salaryStructureForm.get("hra")?.value,
      da: this.salaryStructureForm.get("da")?.value,
      lta: this.salaryStructureForm.get("lta")?.value,
      variablePay: this.salaryStructureForm.get("variablePay")?.value,
      deduction:this.salaryStructureForm.get("deduction")?.value
    }
    console.log(salaryStructure);
   this.hrSvc.getEmployeeSalaryStructure(salaryStructure).subscribe((res)=>{
   });
   console.log(this.salaryStructureForm.value)
  }
}
