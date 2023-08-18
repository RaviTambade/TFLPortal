import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ManagerviewService } from 'src/app/managerview/managerview.service';

@Component({
  selector: 'app-weeklychart',
  templateUrl: './weeklychart.component.html',
  styleUrls: ['./weeklychart.component.css']
})
export class WeeklychartComponentOnInit {
  empid:any
  chartIntervals = ["Year", "Quarter", "Month", "Week"]
 // years:number[]=[]
  selectedInterval: string = this.chartIntervals[0];
  //selectedYear: number = new Date().getFullYear();

  constructor(private svc: ManagerviewService) {
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,

    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 250,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
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
        label: 'timesheet'
      },
    ],
  };

  ngOnInit(): void {
    this.fetchRevenueData()
      }
  
  fetchRevenueData(){
    this.barChartData.datasets[0].label = this.selectedInterval + ' totalworkingHRS'
    switch (this.selectedInterval) {

  
    

      case "Week":
        this.svc.GetWeeklyReport(this.empid).subscribe((res) => {
          console.log(res)
          this.barChartData.labels = res.map(res=> res.weekNumber);
          this.barChartData.datasets[0].data = res.map(res => res.totalworkingHRS);
        });
        break;
    }
  }

}