import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projectlist } from 'src/app/Models/projectlist';
import { Projecttaskcount } from 'src/app/Models/projecttaskcount';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-managerprojects',
  templateUrl: './managerprojects.component.html',
  styleUrls: ['./managerprojects.component.css']
})
export class ManagerprojectsComponent implements OnInit {
  projectList: Projectlist[] = [];
  selectedProjectId: number | null = null;
  filteredProjects: Projectlist[] = [];
  teamMemberId: number = 0;
  teamManagerUserId: string = '';
  projectTaskCount: Projecttaskcount;
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private employeeService: EmployeeService,
    private userService: UserService,
    private taskService: TaskService
  ) {
    this.projectTaskCount = {
      completedTaskCount: 0,
      totalTaskCount: 0,
    };
  }
  ngOnInit() {
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.teamMemberId = res;
      this.projectService
        .getProjectsList(this.teamMemberId)
        .subscribe((res) => {
          this.projectList = res;
          console.log(this.projectList);
          this.filteredProjects = res;
          let distinctTeamManagerUserIds = this.projectList
            .map((item) => item.teamManagerUserId)
            .filter((number, index, array) => array.indexOf(number) === index);
          console.log(distinctTeamManagerUserIds);
          let teamManagerUserIdString = distinctTeamManagerUserIds.join(',');
          this.userService
            .getUserNamesWithId(teamManagerUserIdString)
            .subscribe((res) => {
              let teamManagerName = res;
              console.log(teamManagerName);
              this.projectList.forEach((item) => {
                let matchingItem = teamManagerName.find(
                  (element) => element.id === item.teamManagerUserId
                );
                if (matchingItem != undefined)
                  item.teamManager = matchingItem.name;
                console.log(matchingItem);
              });
              this.projectList.forEach((project) => {
                this.taskService
                  .GetProjectTaskCount(project.id)
                  .subscribe((res) => {
                    this.projectTaskCount = res;
                    console.log(this.projectTaskCount);
                    let completedTask =
                      this.projectTaskCount.completedTaskCount;
                    console.log(completedTask);
                    let totalTask = this.projectTaskCount.totalTaskCount;
                    console.log(totalTask);
                    project.completion = (completedTask / totalTask) * 100;
                  });
              });
            });
        });
    });
  }

  filterProjectsByStatus(status: string) {
    if (status === 'All') {
      this.filteredProjects = this.projectList;
    } else {
      this.filteredProjects = this.projectList.filter(
        (project) => project.status === status
      );
      console.log(this.filteredProjects);
    }
    this.selectedProjectId = null;
    this.projectService.setSelectedProjectId(this.selectedProjectId);
  }

  selectProject(id: number | null) {
    if (this.selectedProjectId === id) {
      this.selectedProjectId = null;
    } else {
      this.selectedProjectId = id;
    }
    this.projectService.setSelectedProjectId(id);
  }

  addProject() {
    this.router.navigate(['teammanager/addproject']);
  
}

}
