import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})
export class ProjectlistComponent  {

  isSubmitted = false;
  projects : any = ['Online Coading' , 'Online Testing', 'Audit Processing', 'Quality inspection','Online Meeting']; 

  constructor(public fb : FormBuilder,private svc : ProjectService) { }

  registrationForm = this.fb.group({
    projectName : [ ' ', [Validators.required]],
  });

  changeProject(e: any){
    this.projectName?.setValue(e.target.value,{
      onlySelf : true,
    });
  }

  //Access formcontrols getter
  
  get projectName(){
    return this.registrationForm.get('projectName');
  }

  onSubmit ():void {
    console.log(this.registrationForm);
    this.isSubmitted= true;
    if(!this.registrationForm.valid){
      false;
    }
    else{
      console.log(JSON.stringify(this.registrationForm.value));
      this.svc.sendData(this.registrationForm.value);
        }
  }

}
