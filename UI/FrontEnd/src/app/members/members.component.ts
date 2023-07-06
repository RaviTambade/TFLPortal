import { Component, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { MemberInfo } from '../projectMemberInfo';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

  isSubmitted = false;
  projects = ['PMSAPP', 'OTBMAPP', 'IMSAPP'];

  subscription: Subscription | undefined;
  message: string | undefined;

  project: any | undefined;
  name: string | undefined;


  projectId: number | undefined;
  members: any;


  constructor(public fb: FormBuilder, private svc: ProjectService) { }

  registrationForm = this.fb.group({
    selectedProject: [' ', [Validators.required]],
  });

  changeProject(e: any) {
    this.selectedProject?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  //Access formcontrols getter

  get selectedProject() {
    return this.registrationForm.get('selectedProject');
  }

  onSubmit(): void {
    console.log(this.registrationForm);
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    }
    else {
      console.log(JSON.stringify(this.registrationForm.value));
      this.svc.sendProject(this.registrationForm.value);
    }
  }

  ngOnInit(): void {
    this.subscription = this.svc.getData().subscribe((response) => {
      this.name = response.name;
      this.project = response.data;
      localStorage.setItem('id', response.id);
      console.log(this.name);
      console.log(response);
    })
  }

  ngOnDestroy() {
    if (this.subscription != undefined)
      this.subscription.unsubscribe();
  }

  getProjectMembers(projectId: any) {
    this.svc.getAllProjectMembers(projectId).subscribe(
      (response) => {
        this.members = response;
        console.log(this.members);
      }
    )
  }

}
