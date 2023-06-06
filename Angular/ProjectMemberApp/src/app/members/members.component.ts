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
  
   constructor (private svc :ProjectService){}
  
   @Input() projectId : number |undefined;
    members : any;

   getProjectMembers(projectId:any){
    this.svc.getAllProjectMembers(projectId).subscribe(
      (response)=>{
        this.members=response;
        console.log(this.members);
      }
    )
   }

}
