import { Component, OnInit, isDevMode } from '@angular/core';
import { Project } from './projects/Models/project';
import { task } from './task/Models/task';
import { Employee } from './activity/Models/Employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private http:HttpClient){}

  getFile(){
    let url='http://localhost:5263/Documents/SahilMankar19122023143721.pdf'
    this.downloadFile(url);
  }


downloadFile(url:string){
  this.http.get(url,  {responseType: 'blob'}).subscribe((response: any) => {
    let blob = new Blob([response], { type: 'application/pdf' });
    let pdfUrl = window.URL.createObjectURL(blob);

    var PDF_link = document.createElement('a');
    PDF_link.href = pdfUrl;
  //   TO OPEN PDF ON BROWSER IN NEW TAB
  window.open(pdfUrl, '_blank');
  
  let filename=url.split('/').pop() || "slip.pdf";
    PDF_link.download = filename;
    PDF_link.click();

});
}

 
  
  ngOnInit(): void {
  
      if (isDevMode()) {
        console.log('Development!');
      } else {
        console.log('Production!');
      }
    }
  
  title = 'PMSNGApp';
  project: Project | undefined;
  taskId:number|undefined;
  timeSheetId:number|undefined;
  employeeId:number=0;
  visibleSalaryStructure:boolean=false;

  onReceiveProjectId(selectedProjectevent: Project) {
    this.project = selectedProjectevent;
  }

  onReceiveTaskId(selectedTaskId: number) {
    this.taskId = selectedTaskId;
  }
  
  onReceiveTimeSheetId(timesheetId:number){
    this.timeSheetId=timesheetId;
  }

  onReceiveEmployee(employeeId: number) {
    this.visibleSalaryStructure=true;
    this.employeeId = employeeId;
    console.log(this.employeeId);
  }




}
