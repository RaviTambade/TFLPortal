import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
//import { Chart, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from 'chart.js';

import { ManagerviewService } from 'src/app/managerview/managerview.service';

@Component({
  selector: 'app-yearlystatus',
  templateUrl: './yearlystatus.component.html',
  styleUrls: ['./yearlystatus.component.css']
})
export class YearlystatusComponent implements OnInit{
//year:number=2020;
projects:any[]=[];
public chart:any;
status:any[]=[];
totalProject:any []=[];

  constructor(private svc:ManagerviewService){

  }
    ngOnInit(): void {
      this.svc.getAllProjectsStatus().subscribe((res)=>{
        this.projects=res;
        console.log(res);
        if(this.projects!=null){
          for(let i=0;i<this.projects.length; i++){
            this.status.push(this.projects[i].status);
            this.totalProject.push(this.projects[i].totalProject);
            // console.log(this.status);
            // console.log(this.totalProject);
          }
        }
        this.createChart(this.status,this.totalProject);
      });   
    }

    createChart(status:any,totalProject:any){
      this.chart = new Chart("MyChart", {
        type: 'bar', //this denotes tha type of chart
        data: {// values on X-Axis
          labels: status, 
          
           datasets: [
            {
              label: "projectStatus",
              data:totalProject , 
              backgroundColor: ['orange','blue','green','red','pink']
            }  
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {},
            y: {
              min: 0,
              max: 10,
                ticks: {
                  stepSize: 1,
                },
            },
          }
      }
      });
    };
  };