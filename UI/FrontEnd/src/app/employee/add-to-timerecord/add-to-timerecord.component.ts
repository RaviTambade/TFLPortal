import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timerecord } from 'src/app/models/timerecord';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-to-timerecord',
  templateUrl: './add-to-timerecord.component.html',
  styleUrls: ['./add-to-timerecord.component.css']
})
export class AddToTimerecordComponent implements OnInit{
  
  timerecord: Timerecord|any;
  status :boolean|undefined;
  empId:any;
  date:any;
  
  
  constructor(private svc: EmployeeService, private router: Router,private route: ActivatedRoute){
    this.timerecord={
      totalTime:''
    };
     this.timerecord.empId=localStorage.getItem('id');
     this.timerecord.date=localStorage.getItem('thisDate');
     
  }
  
  
  
  ngOnInit(): void {
   
  };

  addTimeRecord(form:any):void{
    this.svc.addTimeRecord(this.timerecord).subscribe((response)=>{
      this.status=response;
      console.log(response);
      if (response) {
        alert("TimeRecord added successfully")
        this.router.navigate(['/timerecord-list']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };
 
}
 
