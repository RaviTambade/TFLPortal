import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timesheetlist } from 'src/app/Models/timesheetlist';
import { EmployeeService } from 'src/app/Services/employee.service';
import { TimeSheetService } from 'src/app/Services/timesheet.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-timesheetlist',
  templateUrl: './timesheetlist.component.html',
  styleUrls: ['./timesheetlist.component.css']
})
export class TimesheetlistComponent implements OnInit {
  timeSheetList:Timesheetlist[]=[]
  selectedTimeSheetId:number |null=null
  managerId:number=0
  selectedTimePeriod:string='today'
  constructor(
    private router:Router,
    private timeSheetService:TimeSheetService,
    private employeeService:EmployeeService,
    private userService:UserService
  ) {}
  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.managerId = res;
      this.getTimeSheetList(this.selectedTimePeriod)
})
  }

  getTimeSheetList(timePeriod:string){
    this.selectedTimePeriod=timePeriod
    this.timeSheetService.getTimeSheetListByManager(this.managerId,timePeriod).subscribe((res)=>{
  console.log(res)
  this.timeSheetList=res
  let distinctEmployeeUserId=this.timeSheetList.map((item)=>
    item.employeeUserId
  ).filter((number,index,array)=>array.indexOf(number)==index)
  let employeeUserIdString=distinctEmployeeUserId.join(',')
  console.log(employeeUserIdString)
  this.userService.getUserNamesWithId(employeeUserIdString).subscribe((res)=>{
    let teamMemberName=res
    console.log(teamMemberName)
    this.timeSheetList.forEach((item)=> {
      let matchingItem = teamMemberName.find(
        (element) => element.id === item.employeeUserId
      );
      if (matchingItem != undefined)
        item.employeeName = matchingItem.name;
      console.log(matchingItem);
    });
  })


    })
  }




  selectTimeSheet(id :number){
    if(this.selectedTimeSheetId === id){
      this.selectedTimeSheetId = null;
    }
    else{
      this.selectedTimeSheetId= id
    }
    this.timeSheetService.setTimeSheetId(id);
      }
}
