import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
})
export class LeftSidebarComponent {
  projectLink: any[]=[{url:'projectMembers',name:'Members'},{url :"Addproject",name :'newproject'}]

  leaveLink: any[]=[{url:'leave',name:'Leave Applications'},{url :"Addproject",name :'newproject'}]

  payrollLink: any[]=[{url:'payroll',name:'Salary package '},{url :"Addproject",name :'newproject'}]

  timesheetLink: any[]=[{url:'timesheet',name:'timesheet'},{url :"Addproject",name :'newproject'}]

}
