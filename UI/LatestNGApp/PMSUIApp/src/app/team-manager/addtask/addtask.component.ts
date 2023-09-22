import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Addtask } from 'src/app/Models/addtask';
import { EmployeeService } from 'src/app/Services/employee.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  projectId:number=0
  addTaskForm: FormGroup;
  managerId: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private taskService: TaskService,
    private route:ActivatedRoute
  ) {
    this.addTaskForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', [Validators.required]],
      status: ['', [Validators.required]],
      description: ['', [Validators.required]],
      projectId: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.projectId=params["projectId"]
    })
  }
  onSubmit() {
    if (this.addTaskForm.valid) {
      let task: Addtask = {
        title: this.addTaskForm.get('title')?.value,
        date: this.addTaskForm.get('date')?.value,
        fromTime: this.addTaskForm.get('fromTime')?.value,
        toTime: this.addTaskForm.get('toTime')?.value,
        status: this.addTaskForm.get('status')?.value,
        description: this.addTaskForm.get('description')?.value,
        projectId: this.addTaskForm.get('projectId')?.value,
      };
      this.taskService.addTask(task).subscribe((res) => {
        if (res) {
          alert('task added Sucessfully');
          this.addTaskForm.reset();
        }
      });
    }
  }
}
