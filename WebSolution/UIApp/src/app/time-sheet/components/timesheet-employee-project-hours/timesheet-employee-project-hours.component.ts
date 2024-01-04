import { Component, OnInit } from '@angular/core';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { ProjectWorkHour } from '../../models/projectworkhour';
import { Chart } from 'chart.js';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';

@Component({
  selector: 'timesheet-employee-project-hours',
  templateUrl: './timesheet-employee-project-hours.component.html',
  styleUrls: ['./timesheet-employee-project-hours.component.css'],
})
export class TimesheetEmployeeProjectHoursComponent implements OnInit {
  projectHours: ProjectWorkHour[] = [];
  intervals: string[] = ['week', 'month', 'year'];
  selectedInterval: string = this.intervals[0];
  employeeId: number = 0;
  fromDate: string | undefined;
  toDate: string | undefined;
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
    this.employeeId=Number(localStorage.getItem(LocalStorageKeys.employeeId));
    this.createChart();
    this.onIntervalChange();
  }

  onIntervalChange() {
    switch (this.selectedInterval) {
      case 'week':
        const week = this.workmgmtSvc.getWeekInfo(new Date());
        this.fromDate = week.startDate;
        this.toDate = week.endDate;
        break;

      case 'month':
        const currentmonth = new Date().getMonth();
        this.fromDate = this.workmgmtSvc.firstDayOfMonth(currentmonth);
        this.toDate = this.workmgmtSvc.lastDayofMonth(currentmonth);
        break;

      case 'year':
        const currentYear = new Date().getFullYear();
        this.fromDate = `${currentYear}-01-01`;
        this.toDate = `${currentYear}-12-31`;
        break;
    }
      this.getChartData();
  }

  getChartData(){
    if (this.fromDate && this.toDate) 
    this.workmgmtSvc.getProjectwiseTimeSpent(this.employeeId,this.fromDate,this.toDate).subscribe((res) => {
      this.projectHours = res;
      this.chart.data.labels=[];
      this.chart.data.datasets[0].data=[]
      this.chart.data.datasets[0].backgroundColor=[]
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
