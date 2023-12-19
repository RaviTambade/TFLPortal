import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { BiService } from 'src/app/shared/services/bi.service';

@Component({
  selector: 'app-monthly-leave-chart',
  templateUrl: './monthly-leave-chart.component.html',
  styleUrls: ['./monthly-leave-chart.component.css']
})
export class MonthlyLeaveChartComponent {
  chart: any; // Define the chart variable
  values: string| any; 
  employeId:number=3;// Update the declaration to be an array of numbers
  constructor(private biSvc: BiService) { }

  ngOnInit() {
    this.biSvc.getMonthlyLeaves(this.employeId).subscribe((res) => {
      let keys = Object.keys(res);
      console.log()
      this.values = Object.values(res);
      console.log(this.values);
      console.log(res);
      this.createChart(keys, this.values); // Pass keys and values to createChart
    });
  }

  createChart(keys: string[], values: number[]) {
    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: keys,
        datasets: [
          {
            label: 'Leave Count', // Label for the dataset
            data: values,
            backgroundColor: ['orange','green','blue']
          }
        ]
      },
      options: {
        indexAxis:'y',
        aspectRatio: 2.5
      }
    });
  }
}
