import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dailyreviewprogress',
  templateUrl: './dailyreviewprogress.component.html',
  styleUrls: ['./dailyreviewprogress.component.css']
})
export class DailyreviewprogressComponent implements OnInit{
  title = 'ChartApp';
  chart: any = [];

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['SUNDAY', 'MONDAY', 'TUESDAY','WEDNESDAY',
								 'THURSDAY', 'FRIDAY', 'SATURDAY'], 
	       datasets: [
          {
            label: "WorkingHours",
            data: ['8','7', '4', '8', '3',
								 '7', '8', '6'],
            backgroundColor: 'blue'
          },
          // {
          //   label: "Profit",
          //   data: ['542', '542', '536', '327', '17',
					// 				 '0.00', '538', '541'],
          //   backgroundColor: 'limegreen'
          // }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  ngOnInit() {
    this.createChart();
  }
}
