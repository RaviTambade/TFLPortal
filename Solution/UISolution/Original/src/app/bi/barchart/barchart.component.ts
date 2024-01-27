import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  chart: any; // Define the chart variable
  values: number[] | undefined; // Update the declaration to be an array of numbers
  constructor(private workmgmtSvc: WorkmgmtService) { }

  ngOnInit() {
    this.workmgmtSvc.getAllEmployeeWorkCount().subscribe((res) => {
      let keys = Object.keys(res);
      this.values = Object.values(res);
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
            label: 'Activity Count', // Label for the dataset
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
