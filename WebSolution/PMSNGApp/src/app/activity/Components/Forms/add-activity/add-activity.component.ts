import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Activity } from 'src/app/activity/Models/Activity';
import { ActivityService } from 'src/app/activity/Services/activity.service';
import { Project } from 'src/app/projects/Models/project';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
constructor(private service:ActivityService) {}

projects:Project[]=[];
  ngOnInit(): void {
    this.service.getAllProject().subscribe((res)=>{
    this.projects=res;
    console.log(res);
    })
  }

activity:Activity={
  id: 0,
  title: '',
  description: '',
  activityType: '',
  projectId: 0,
  assignedBy: 0,
  assignedTo: 0,
  assignDate: '',
  startDate: '',
  dueDate: '',
  status: ''
};
activityform=new FormGroup({
  title:new FormControl(),
  activitytype:new FormControl(),
  description:new FormControl(),
  assigndate:new FormControl(),
  startdate:new FormControl(),
  duedate:new FormControl(),
  projectid:new FormControl(),
  assignedby:new FormControl(),
  assignedto:new FormControl(),
  createddate:new FormControl(),
  status:new FormControl(),


});




onSubmit(){
 this.service.addActivity(this.activity);
 console.log(this.activityform.value)
}

}
