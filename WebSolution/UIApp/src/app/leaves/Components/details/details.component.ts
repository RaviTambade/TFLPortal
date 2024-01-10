import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeavesService } from '../../Services/leaves.service';
import { LeaveDetails } from '../../Models/LeaveDetails';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {

  leaveId:number=0;
  leave:LeaveDetails |undefined;
  constructor(private router:Router,private route:ActivatedRoute,private service:LeavesService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((res)=>{
      this.leaveId=Number(res.get('id'))
      this.service.getEmployeeLeavesDetails(this.leaveId).subscribe((res)=>{
        this.leave=res;
      })
    })
  }
}
