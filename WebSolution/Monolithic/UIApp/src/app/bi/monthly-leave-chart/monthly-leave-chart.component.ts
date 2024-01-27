import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { BiService } from 'src/app/shared/services/bi.service';

@Component({
  selector: 'app-monthly-leave-chart',
  templateUrl: './monthly-leave-chart.component.html',
  styleUrls: ['./monthly-leave-chart.component.css']
})
export class MonthlyLeaveChartComponent {
  // chart: any; // Define the chart variable
  employeId:number=12;// Update the declaration to be an array of numbers
  year:number=2023;
  keys:any[]=[];
  values:any[]=[];
  leaves:any[]=[];
  data:any[]=[];

  constructor(private biSvc: BiService) { }

  // ngOnInit() {
  //   this.biSvc.getMonthlyLeaves(this.employeId,this.year).subscribe((res) => {
  //     console.log(res);
  //     this.leaves=res;
  //     this.leaves.forEach(element => {
  //       this.keys.push(element.monthName);
  //       this.values.push(element.count);   
  //     });
  //     console.log(this.values);
  //     console.log(this.keys);
  //     this.createChart(this.keys,this.values); // Pass keys and values to createChart
  //   });
  // }

  // createChart(keys:any,values:any) {
  //   this.chart = new Chart('MyChart', {
  //     type: 'bar',
  //     data: {
  //       labels: keys,
  //       datasets:
  //       [
  //         {
  //           label: 'Leave Count', // Label for the dataset
  //           data: values,
  //           backgroundColor: ['orange']
  //         }
  //       ]
  //     },
  //     options: {
  //       aspectRatio: 2.5
  //     }
  //   });
  // }

  title = 'ChartApp';
  chart: any = [];
 
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels:['january', 'february', 'march','april','may','june','july','august','september','october','november','december'
								 ], 
	       datasets: [
          {
            label: "sick",
            data: ['40','57', '52', '60', '40'],
            backgroundColor: 'green'
          },
          {
            label: "casual",
            data: ['5', '2', '6', '3', '1'],
            backgroundColor: 'red'
          },
          {
            label: "paid",
            data: ['5', '2', '6', '3', '1'],
            backgroundColor: 'blue'
          },
          {
            label: "unpaid",
            data: ['5', '2', '6', '3', '1'],
            backgroundColor: 'pink'
          }

        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  ngOnInit() {
    this.biSvc.getMonthlyLeaves(this.employeId,this.year).subscribe((res) => {
          console.log(res);
          this.leaves=res;
          // this.keys=this.leaves.map(item => item.month).filter((value, index, self) => self.indexOf(value) === index);
          // this.leaves.forEach(element => {
          //   this.keys.push(element.month);
          //   this.values.push(element.consumedLeaves);
          //   this.data.push(element.leaveType);     
          // });
          // console.log(this.values);
          // console.log(this.keys);
          // this.createChart(this.keys,this.values,this.data); // Pass keys and values to createChart
        });
        this.createChart();
  }
}
