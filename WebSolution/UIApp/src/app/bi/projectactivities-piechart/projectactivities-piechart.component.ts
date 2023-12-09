import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-projectactivities-piechart',
  templateUrl: './projectactivities-piechart.component.html',
  styleUrls: ['./projectactivities-piechart.component.css']
})
export class ProjectactivitiesPiechartComponent implements OnInit{
  title = 'ChartApp';

  chart: any = [];
 
  

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type:'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['issues', 'bug', 'meeting','coding'], 
	       datasets: [
          {
            label: "workingHoursOnActivities",
            data: ['40','57', '52', '60'],
            backgroundColor: 'blue'
          },
          // {
          //   label: "",
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
