import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weeklyprogreessreview',
  templateUrl: './weeklyprogreessreview.component.html',
  styleUrls: ['./weeklyprogreessreview.component.css']
})
export class WeeklyprogreessreviewComponent implements OnInit{
  title = 'ChartApp';
  chart: any = [];
 
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['week 1', 'week 2', 'week 3','week 4',
								 ], 
	       datasets: [
          {
            label: "WorkingHours",
            data: ['40','57', '52', '60', '40'],
            backgroundColor: 'green'
          },
          {
            label: "NotWorkingHours",
            data: ['5', '2', '6', '3', '1'],
            backgroundColor: 'red'
          }  
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
