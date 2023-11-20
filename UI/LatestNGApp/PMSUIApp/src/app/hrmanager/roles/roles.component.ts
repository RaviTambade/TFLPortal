import { Component, OnInit } from '@angular/core';
import { HrmanagerService } from 'src/app/Services/hrmanager.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  constructor(private service:HrmanagerService){}
  
  Roles:any[]=[];
  ngOnInit(): void {
  this.service.getRoles().subscribe((res)=>{
 this.Roles=res;
 console.log(this.Roles);
  })
  }

}
