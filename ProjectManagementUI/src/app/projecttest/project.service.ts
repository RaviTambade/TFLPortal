import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
 //target
  private subject = new Subject<any>();

   projects  = [
    { name: 'Online coading',          id: '1', stddate:'2021/02/10',enddate:'2021/04/10', description:'Online coading on project',empId:1},
    { name: 'Online coading',          id: '1', stddate:'2021/03/10',enddate:'2021/05/10', description:'Online coading on project deta',empId:2},
    { name: 'Online coading',          id: '1', stddate:'2020/02/10',enddate:'2020/04/10', description:'Online coading on Components',empId:3},
    { name: 'Online testing',          id: '2', stddate:'2021/05/11',enddate:'2021/06/10', description:'Online testing on project',empId:3},
    { name: 'Arrange Online Meeting', id: '3', stddate:'2022/01/10',enddate:'2022/04/10', description:'Online coading on project',empId:2},
    { name: 'Audit Processing',        id: '4', stddate:'2020/04/10',enddate:'2020/06/10', description:'Online coading on project',empId:2},
    { name: 'Quality Inspection',      id: '5', stddate:'2020/05/10',enddate:'2020/07/10', description:'Online coading on project',empId:1},
  ];

  sendData(data : any){
    //this.subject.next(data);
    //it is publishing this value to all subscriber
    //that have already subscribed to this message
     data=data.projectName;
    // if(data == "Online coading")
    // {
    //   let projects=this.projects.filter(project=>project.name=="Online coading");
    //   this.subject.next(projects);
    //   console.log(projects);
    // }
    switch (data){
      case "Online coading" :
          {
            let projects=this.projects.filter(project=>project.name=="Online coading");
            this.subject.next(projects);
            console.log(projects);
          }break;

      case "Online testing" :
            {
              let projects=this.projects.filter(project=>project.name=="Online testing");
              this.subject.next(projects);
              console.log(projects);
            }break;   
      case "Arrange Online Meeting" :
              {
                let projects=this.projects.filter(project=>project.name=="Arrange Online Meeting");
                this.subject.next(projects);
                console.log(projects);
              }break;    
      case "Audit Processing" :
                {
                  let projects=this.projects.filter(project=>project.name=="Audit Processing");
                  this.subject.next(projects);
                  console.log(projects);
                }break;    
      case "Quality Inspection" :
                  {
                    let projects=this.projects.filter(project=>project.name=="Quality Inspection");
                    this.subject.next(projects);
                    console.log(projects);
                  }break;          
       

      default : break;    

    }

  }

  clearData(){
    this.subject.next(" ");
  }

  getData() : Observable<any>{
    return this.subject.asObservable();
  }
}
