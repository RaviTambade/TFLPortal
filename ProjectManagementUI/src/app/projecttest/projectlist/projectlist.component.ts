import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})
export class ProjectlistComponent implements OnInit {

  // isSubmitted = false;
  // projects  = [
  //     'Online coading',
  //     'Online testing',
  //     'Arrange Online Meeting',
  //     'Audit Processing',
  //     'Quality Inspection',
  // ];

  // constructor(public fb : FormBuilder,private svc : ProjectService) { }

  // registrationForm = this.fb.group({
  //   projectName : [ ' ', [Validators.required]],
  // });

  // changeProject(e: any){
  //   this.projectName?.setValue(e.target.value,{
  //     onlySelf : true,
  //   });
  // }

  // //Access formcontrols getter
  
  // get projectName(){
  //   return this.registrationForm.get('projectName');
  // }

  // onSubmit ():void {
  //   console.log(this.registrationForm);
  //   this.isSubmitted= true;
  //   if(!this.registrationForm.valid){
  //     false;
  //   }
  //   else{
  //     console.log(JSON.stringify(this.registrationForm.value));
  //     this.svc.sendData(this.registrationForm.value);
  //       }
  // }

  isSubmitted = false;
  projects  = ['Online Meeting Sheduling','Online Interview Sheduling','MockTesting Sheduling'];

  constructor(public fb : FormBuilder,private svc : ProjectService) { }
  ngOnInit(): void {}

  registrationForm = this.fb.group({
    selectedProject: [ ' ', [Validators.required]],
  });

  changeProject(e: any){
    this.selectedProject?.setValue(e.target.value,{
      onlySelf : true,
    });
  }

  //Access formcontrols getter
  
  get selectedProject(){
    return this.registrationForm.get('selectedProject');
  }

  onSubmit ():void {
    console.log(this.registrationForm);
    this.isSubmitted= true;
    if(!this.registrationForm.valid){
      false;
    }
    else{
      console.log(JSON.stringify(this.registrationForm.value));
      this.svc.sendProject(this.registrationForm.value);
        }
  }

}
