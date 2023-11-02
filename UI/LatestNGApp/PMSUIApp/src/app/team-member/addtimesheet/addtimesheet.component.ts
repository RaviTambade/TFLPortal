import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Projectname } from 'src/app/Models/projectname';
import { Taskidwithtitle } from 'src/app/Models/taskidwithtitle';
import { Timesheet } from 'src/app/Models/timesheet';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';
import { TimeSheetService } from 'src/app/Services/timesheet.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-addtimesheet',
  templateUrl: './addtimesheet.component.html',
  styleUrls: ['./addtimesheet.component.css'],
})
export class AddtimesheetComponent implements OnInit {
  timeSheetForm: FormGroup;
  employeeId: number | undefined;
  selectedProjectId: number | undefined;
  projectNames: Projectname[] = [];
  taskName:Taskidwithtitle[]=[]
  statusOptions: string[] = ['In-Progress', 'Pending'];
  selectedStatus: string = '';
  taskStatusOptions: string[] = ['In-Progress', 'Pending', 'Completed'];
  selectedTaskStatus: string = '';
  constructor(
    private timeSheetService: TimeSheetService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private taskService:TaskService
  ) {
    this.timeSheetForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      date: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
      taskId: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.employeeId = res;
      this.loadProjectNames()
    });
  }
  loadProjectNames(){
    if (this.employeeId != undefined) {
      this.projectService.getProjectNames(this.employeeId).subscribe((res) => {
        this.projectNames = res;
        })
      }
    }
      onProjectChange(){
      if (this.employeeId !== undefined && this.selectedProjectId !== undefined) {
        this.taskService.getTaskIdWithTitle(this.employeeId,this.selectedProjectId,this.selectedStatus).subscribe((res)=>{
          this.taskName=res
        })
    }
    }
    onStatusChange(newValue: string) {
      this.selectedStatus = newValue;
      this.onProjectChange(); 
    }
    OnSubmit() {
      if (this.timeSheetForm.valid) {
        let timeSheet :Timesheet = {
          employeeId: this.timeSheetForm.get('employeeId')?.value,
          date: this.timeSheetForm.get('date')?.value,
          fromTime: this.timeSheetForm.get('fromTime')?.value,
          toTime: this.timeSheetForm.get('toTime')?.value,
          description: this.timeSheetForm.get('description')?.value,
          status: this.timeSheetForm.get('status')?.value,
          taskId: this.timeSheetForm.get('taskId')?.value
        };
        this.timeSheetService.addTimeSheet(timeSheet).subscribe((res)=>{
          if (res) {
            alert("timesheet added Sucessfully")
            this.timeSheetForm.reset();
          }
      })
    
  }
}
}
