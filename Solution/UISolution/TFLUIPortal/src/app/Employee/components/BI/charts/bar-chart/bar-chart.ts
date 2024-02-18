import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.html',
})
export class BarChart {
  title = 'ng-chart';
  chart: any = [];
 
  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [112, 129, 63, 85, 82, 23],
            borderWidth: 1,
            barThickness: 40,
            backgroundColor: ["red" ,"blue","green","yellow","orange","violet"],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

}
