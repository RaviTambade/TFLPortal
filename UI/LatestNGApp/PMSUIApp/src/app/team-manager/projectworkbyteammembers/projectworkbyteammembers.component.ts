import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Projectname } from 'src/app/Models/projectname';
import { Projectworkbymember } from 'src/app/Models/projectworkbymember';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { UserService } from 'src/app/Services/user.service';
import 'chartjs-plugin-datalabels';
import { BIserviceService } from 'src/app/Services/biservice.service';
import { DateRange } from 'src/app/Models/Enums/date-range';

@Component({
  selector: 'app-projectworkbyteammembers',
  templateUrl: './projectworkbyteammembers.component.html',
  styleUrls: ['./projectworkbyteammembers.component.css'],
})
export class ProjectworkbyteammembersComponent {
  projectWorkByMember: Projectworkbymember[] | undefined;
  @Input() projectId: number | null = null;
  teamManagerId: number = 0;
  managerProjects: Projectname[] = [];
  selectedProjectId: number = 1;
selectedDateRange:string = "today"
selectedGivenDate:string = new Date().toISOString().split('T')[0];
dateRangeOptions: string[] = ['today', 'yesterday', 'weekly', 'monthly', 'custom'];

  constructor(
    private biService: BIserviceService,
    private userService: UserService,
    private projectService: ProjectService,
    private employeeService: EmployeeService
  ) {}
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0.5,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Hours',
        backgroundColor: '#a306b4',
      },
    ],
  };

  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    this.employeeService.getEmployeeId(Number(userId)).subscribe((res) => {
      this.teamManagerId = res;
      this.fetchProjectWork(this.selectedProjectId,this.selectedGivenDate,this.selectedDateRange);
      console.log(this.selectedProjectId);
      this.projectService
        .getManagerProjectNames(this.teamManagerId)
        .subscribe((res) => {
          console.log(res);
          this.managerProjects = res;
        });
    });
  }
  fetchProjectWork(projectId: number,givenDate:string,dateRange:string): void {
    this.biService.getTotalHoursOfMembers(projectId,givenDate,dateRange).subscribe((res) => {
      this.projectWorkByMember = res;
      let teamMemberIds = this.projectWorkByMember.map((u) => u.userId);
      console.log(teamMemberIds);
      if (teamMemberIds !== null) {
        let teamMemberStringIds = teamMemberIds.join(',');
        this.userService
          .getUserNamesWithId(teamMemberStringIds)
          .subscribe((res) => {
            let teamManagerName = res;
            if (this.projectWorkByMember != undefined)
              this.projectWorkByMember.forEach((item) => {
                let matchingItem = teamManagerName.find(
                  (element) => element.id === item.userId
                );
                if (matchingItem != undefined)
                  item.employeeName = matchingItem.name;
                if (this.projectWorkByMember != undefined) {
                  this.barChartData.labels = this.projectWorkByMember.map(
                    (work) => work.employeeName
                  );
                  this.barChartData.datasets[0].data =
                    this.projectWorkByMember.map(
                      (work) => work.totalWorkingHour
                    );
                }
              });
          });
      }
    });
  }
  // onProjectChange(newProjectId: number,newGivenDate:string,newDateRange:string): void {
  //   this.selectedProjectId = newProjectId;
  //   this.fetchProjectWork(newProjectId,newGivenDate,newDateRange);
  //   console.log(newProjectId);
  // }
  onButtonClick(): void {
    this.fetchProjectWork(this.selectedProjectId, this.selectedGivenDate, this.selectedDateRange);
  }
}
