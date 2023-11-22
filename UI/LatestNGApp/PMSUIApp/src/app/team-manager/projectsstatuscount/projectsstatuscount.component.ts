import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Projectstatuscount } from 'src/app/Models/projectstatuscount';
import { EmployeeService } from 'src/app/Services/employee.service';
import { BIserviceService } from 'src/app/Services/biservice.service';
import { TokenClaims } from 'src/app/Models/Enums/tokenClaims';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-projectsstatuscount',
  templateUrl: './projectsstatuscount.component.html',
  styleUrls: ['./projectsstatuscount.component.css']
})
export class ProjectsstatuscountComponent implements OnInit {
  teamManagerId:number=0
  projectStatusCount:Projectstatuscount[]=[]

  constructor(private employeeService:EmployeeService,
    private biService:BIserviceService, private authservice:AuthenticationService){}
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
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
      { data: [], label: 'Completed', backgroundColor: 'rgba(0, 153, 0, 0.5)', },
      { data: [], label: 'In-Progress', backgroundColor: 'rgba(255, 165, 0, 0.5)' },
      { data: [], label: 'Pending', backgroundColor: 'rgba(255, 0, 0, 0.5)', },
    ],
  };
  ngOnInit(): void {
    let userId = this.authservice.getClaimFromToken(TokenClaims.userId);
    console.log(userId);
    this.employeeService.getEmployeeId(userId).subscribe((res) => {
      this.teamManagerId = res;
      this.getProjectStatusCount(this.teamManagerId)
  })
}
getProjectStatusCount(teamManagerId:number):void{
this.biService.getProjectsStatusCount(teamManagerId).subscribe((res)=>{
  this.projectStatusCount=res
  this.barChartData.labels =this.projectStatusCount.map((project)=>project.projectTitle).filter((number, index, array) => array.indexOf(number) === index);
  this.barChartData.datasets[0].data=this.projectStatusCount.filter((p)=>p.status == "Completed").map((project)=>project.taskStatusCount);
  this.barChartData.datasets[1].data=this.projectStatusCount.filter((p)=>p.status == "In-Progress").map((project)=>project.taskStatusCount);
  this.barChartData.datasets[2].data=this.projectStatusCount.filter((p)=>p.status == "Pending").map((project)=>project.taskStatusCount);
})
}

}
