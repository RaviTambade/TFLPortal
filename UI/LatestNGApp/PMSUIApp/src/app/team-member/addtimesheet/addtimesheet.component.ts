import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Projectname } from 'src/app/Models/projectname';
import { Taskidwithtitle } from 'src/app/Models/taskidwithtitle';
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
  projectId:number |undefined
  projectName: Projectname[] = [];
  taskName:Taskidwithtitle[]=[]
  status:string=''
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
      taskId: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.employeeId = res;
    });

    if (this.employeeId != undefined) {
      this.projectService.getProjectNames(this.employeeId).subscribe((res) => {
        this.projectName = res;
        })
      }

      
    if (this.employeeId != undefined && this.projectId != undefined) {
      this.taskService.getTaskIdWithTitle(this.employeeId,this.projectId,this.status).subscribe((res)=>{
        this.taskName=res
      })
    }
    

    }

  }
