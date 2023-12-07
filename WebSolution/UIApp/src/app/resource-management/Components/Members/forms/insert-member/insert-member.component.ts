import { Component } from '@angular/core';
import { Member } from 'src/app/resource-management/Models/Member';

@Component({
  selector: 'app-insert-member',
  templateUrl: './insert-member.component.html',
  styleUrls: ['./insert-member.component.css']
})
export class InsertMemberComponent {

  member:Member={
    employeeId: 0,
    projectId: 0,
    membership: '',
    membershipDate: ''
  }

  

}
