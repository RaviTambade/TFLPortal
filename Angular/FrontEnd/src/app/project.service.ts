import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private subject = new Subject<any>();

  constructor(private http :HttpClient) { }


  getAllProjects():Observable<any>{
    let url = "http://localhost:5294/api/projects/projects";
    return this.http.get<any>(url);
  }

  sendProject(data:any){
    let name = data.selectedProject;
    console.log("Service is called");
    console.log(name);

    switch(name){
      case "PMSAPP":{
        let url = "http://localhost:5294/api/projects/project/"+name;
        this.http.get(url).subscribe((data) =>{
          console.log(data);
          this.subject.next({data,name});
        });
        break;
      }
      case "OTBMAPP":{
        let url = "http://localhost:5294/api/projects/project/"+name;
        this.http.get(url).subscribe((data) =>{
          console.log(data);
          this.subject.next({data,name});
        });
        break;
      }
      case "IMSAPP":{
        let url = "http://localhost:5294/api/projects/project/"+name;
        this.http.get(url).subscribe((data) =>{
          console.log(data);
          this.subject.next({data,name});
        });
        break;
      }
    }
  }

  getData(): Observable<any>{
    return this.subject.asObservable();
  }




getAllProjectMembers(projectId : number):Observable<any>{
  let url = "http://localhost:5294/api/ProjectMembers/project/"+projectId;
  return this.http.get<any>(url);
}

}
















