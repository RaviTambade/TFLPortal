import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenClaims } from 'src/app/Models/Enums/tokenClaims';
import { Timesheetlist } from 'src/app/Models/timesheetlist';
import { AuthenticationService } from 'src/app/Services/authentication.service';
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
    private userService:UserService, private authservice:AuthenticationService
  ) {}
  ngOnInit(): void {
    let userId = this.authservice.getClaimFromToken(TokenClaims.userId);
    this.employeeService.getEmployeeId(userId).subscribe((res) => {
      this.managerId = res;
      this.getTimeSheetList(this.selectedTimePeriod)
})
  }

  getTimeSheetList(timePeriod:string){
    this.selectedTimePeriod=timePeriod
    this.timeSheetService.getTimeSheetListByManager(this.managerId,timePeriod).subscribe((res)=>{
  this.timeSheetList=res
  let distinctEmployeeUserId=this.timeSheetList.map((item)=>
    item.employeeUserId
  ).filter((number,index,array)=>array.indexOf(number)==index)
  let employeeUserIdString=distinctEmployeeUserId.join(',')
  this.userService.getUserNamesWithId(employeeUserIdString).subscribe((res)=>{
    let teamMemberName=res
    this.timeSheetList.forEach((item)=> {
      let matchingItem = teamMemberName.find(
        (element) => element.id === item.employeeUserId
      );
      if (matchingItem != undefined)
        item.employeeName = matchingItem.fullName;
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

    onClickTask(taskId:number){
      this.router.navigate(['teammanager/updatestatus',taskId]);
    }
}
