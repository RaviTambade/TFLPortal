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
  employeId:number=11;// Update the declaration to be an array of numbers
  keys:any[]=[];
  values:any[]=[];
  leaves:any[]=[];

  constructor(private biSvc: BiService) { }

  ngOnInit() {
    this.biSvc.getMonthlyLeaves(this.employeId).subscribe((res) => {
      console.log(res);
      this.leaves=res;
      this.leaves.forEach(element => {
        this.keys.push(element.monthName);
        this.values.push(element.count);   
      });
      console.log(this.values);
      console.log(this.keys);
      this.createChart(this.keys,this.values); // Pass keys and values to createChart
    });
  }

  createChart(keys:any,values:any) {
    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: keys,
        datasets:
        [
          {
            label: 'Leave Count', // Label for the dataset
            data: values,
            backgroundColor: ['orange']
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}
