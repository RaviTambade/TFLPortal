import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-project-work-chart',
  templateUrl: './project-work-chart.component.html',
  styleUrls: ['./project-work-chart.component.css']
})
export class ProjectWorkChartComponent implements OnInit{
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['A', 'B', 'C','D',
								 'E', ], 
	       datasets: [
          {
            label: "hours",
            data: ['46','76', '72', '79', '92',
								 ],
            backgroundColor: ['blue','red','yellow','green','orange']
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
}
