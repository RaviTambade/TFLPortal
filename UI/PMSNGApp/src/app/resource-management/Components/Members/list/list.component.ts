import { Component, OnInit } from '@angular/core';
import { ResourceManagementService } from 'src/app/resource-management/Services/resource-management.service';

@Component({
  selector: 'projectmember-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
members:any[]=[];
projectId:number=1;
constructor(private service:ResourceManagementService){}
  ngOnInit(): void {
    this.service.getProjectMembers(this.projectId).subscribe((res)=>{
      this.members=res;
      console.log(this.members)
    })
  }


}
