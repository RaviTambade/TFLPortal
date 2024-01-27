import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-monthlyprogressreview',
  templateUrl: './monthlyprogressreview.component.html',
  styleUrls: ['./monthlyprogressreview.component.css']
})
export class MonthlyprogressreviewComponent implements OnInit{
  title = 'ChartApp';

  chart: any = [];
 
  

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['April', 'May', 'June','Jully','Auguest','September','October','November','December','Janevari','February','March'
								 ], 
	       datasets: [
          {
            label: "WorkingHours",
            data: ['40','57', '52', '60', '40','100','120','105','75','89','80','110'],
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
