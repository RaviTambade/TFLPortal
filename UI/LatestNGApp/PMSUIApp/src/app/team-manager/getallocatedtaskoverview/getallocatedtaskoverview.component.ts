import { Component, OnInit } from '@angular/core';
import { TokenClaims } from 'src/app/Models/Enums/tokenClaims';
import { Allocatedtaskoverview } from 'src/app/Models/allocatedtaskoverview';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { BIserviceService } from 'src/app/Services/biservice.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-getallocatedtaskoverview',
  templateUrl: './getallocatedtaskoverview.component.html',
  styleUrls: ['./getallocatedtaskoverview.component.css'],
})
export class GetallocatedtaskoverviewComponent implements OnInit {
  allocatedTaskOverview: Allocatedtaskoverview[] = [];
  teamManagerId: number = 0;
  teamMemberIds:number[]=[]
  currentIndex = 0;

  constructor(
    private biService: BIserviceService,
    private employeeService: EmployeeService,
    private projectService:ProjectService,
    public userService:UserService, 
    private authservice:AuthenticationService
  ) {}

  ngOnInit(): void {
    this.startCarousel();
    let userId = this.authservice.getClaimFromToken(TokenClaims.userId);
    this.employeeService.getEmployeeId(userId).subscribe((res) => {
      this.teamManagerId = res;
      this.projectService.getTeamMemberIds(this.teamManagerId).subscribe((res)=>{
        this.teamMemberIds = res
        let teamMemberStringIds=this.teamMemberIds.join(",")
        this.biService.getAllocatedTaskOverview(teamMemberStringIds).subscribe((res)=>{
          this.allocatedTaskOverview=res
          let distinctTeamMemberUserIds = this.allocatedTaskOverview
            .map((item) => item.userId)
            .filter((number, index, array) => array.indexOf(number) === index);
          let teamMemberrUserIdString = distinctTeamMemberUserIds.join(',');
          this.userService
          .getUserNamesWithId(teamMemberrUserIdString)
          .subscribe((res) => {
            let teamMemberName = res;
              this.allocatedTaskOverview.forEach((item) => {
                let matchingItem = teamMemberName.find(
                  (element) => element.id === item.userId
                );
                if (matchingItem != undefined)
                  item.employeeName = matchingItem.fullName;
        })
      })
    });
  })
})
}


startCarousel(): void {
  setInterval(() => {
    this.nextSlide();
  }, 3000); 
}

prevSlide(): void {
  this.currentIndex = (this.currentIndex - 1 + this.allocatedTaskOverview.length) % this.allocatedTaskOverview.length;
}

nextSlide(): void {
  this.currentIndex = (this.currentIndex + 1) % this.allocatedTaskOverview .length;
}

goToSlide(index: number): void {
  this.currentIndex = index;
}



}
