import { Component, OnInit } from '@angular/core';
import { Timerecord } from '../timerecord';
import { ManagerviewService } from '../../managerview.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-timerecord',
  templateUrl: './add-timerecord.component.html',
  styleUrls: ['./add-timerecord.component.css']
})
export class AddTimerecordComponent implements OnInit{
  
  timerecord: Timerecord|any;
  status :boolean|undefined;
  
  
  constructor(private svc: ManagerviewService, private router: Router,private route: ActivatedRoute){
    this.timerecord={
      empId: 0,
      date:'',
      totalTime:''
    };
    this.timerecord.empId=localStorage.getItem('id');
    this.timerecord.date=localStorage.getItem('date');

  }
  
  
  
  ngOnInit(): void {
   
  };

  addTimeRecord(form:any):void{
    this.svc.addTimeRecord(this.timerecord).subscribe((response)=>{
      this.status=response;
      console.log(response);
      if (response) {
        alert("TimeRecord added successfully")
        this.router.navigate(['/timerecordlist']);
      }
      else {
        alert("Check the form again ....")
      }
    })
  };





  
}
