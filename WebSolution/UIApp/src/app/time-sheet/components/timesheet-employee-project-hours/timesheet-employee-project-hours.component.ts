import { Component, OnInit } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { ProjectWorkHour } from '../../models/projectworkhour';
import { Chart } from 'chart.js';

@Component({
  selector: 'timesheet-employee-project-hours',
  templateUrl: './timesheet-employee-project-hours.component.html',
  styleUrls: ['./timesheet-employee-project-hours.component.css'],
})
export class TimesheetEmployeeProjectHoursComponent implements OnInit {
  projectHours: ProjectWorkHour[] = [];

  chart: any ;
 
  

  createChart(){
  
    this.chart = new Chart("MyPieChart", {
      type:'pie', 
      
      data: {
        
        labels: [], 
	       datasets: [
          {
            data: [],
            backgroundColor: []
          }
        ]
      },
      options: {
        aspectRatio:3,
        plugins: {
          title: {
            display: true,
            text: 'Projectwise Time Utilization In Hours'
          },
        },
     
      }
      
    });
  }


  constructor(private workmgmtSvc: WorkmgmtService) {}
  ngOnInit(): void {
    this.createChart();

    this.workmgmtSvc.getProjectwiseTimeSpent(10).subscribe((res) => {
      this.projectHours = res;
      this.projectHours.forEach((projectHour)=>{
        this.chart.data.labels.push(projectHour.projectName);
        this.chart.data.datasets[0].data.push(projectHour.hours);
        this.chart.data.datasets[0].backgroundColor.push(this.workmgmtSvc.randomColorPicker());
      });
      console.table(this.projectHours);
      this.chart.update();
    });


  }
}
