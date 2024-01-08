import { Component, Input, SimpleChanges } from '@angular/core';
import { HrService } from 'src/app/shared/services/hr.service';

@Component({
  selector: 'app-monthlysalarystructure',
  templateUrl: './monthlysalarystructure.component.html',
  styleUrls: ['./monthlysalarystructure.component.css']
})
export class MonthlysalarystructureComponent {

  @Input() employeeId:number|undefined;
  salaryStructure:any;

  constructor(private hrService:HrService){}
  
  ngOnChanges(changes:SimpleChanges): void {
    console.log(changes["employeeId"].currentValue);
    this.hrService.getSalaryStructure(changes["employeeId"].currentValue).subscribe((res)=>{
      this.salaryStructure=res;
      console.log(res);
      console.log("🚀 ~ this.hrService.getSalaryStructure ~ res:", res);
    })
  }
}
