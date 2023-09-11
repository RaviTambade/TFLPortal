import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
   projects: {id:number, employeeId:number; title: string; startDate: Date; status: string;description:string;teamManager:string }[] = [
    {id:1,employeeId:1, title: "PMSAPP", startDate: new Date("2023-02-02"), status: "In-Progress",description: "Description for Project 1", teamManager: "Manager 1" },
    {id:2,employeeId:1, title: "EKrushi", startDate: new Date("2023-02-02"), status: "Pending",description: "Description for Project 2", teamManager: "Manager 2"  },
    {id:3,employeeId:1, title: "HMAPP", startDate: new Date("2023-02-02"), status: "In-Progress",description: "Description for Project 2", teamManager: "Manager 2" },
    {id:4,employeeId:1, title: "EAgro", startDate: new Date("2023-02-02"), status: "Pending" ,description: "Description for Project 2", teamManager: "Manager 2"},
    {id:5,employeeId:1, title: "Inventrory", startDate: new Date("2023-02-02"), status: "Completed",description: "Description for Project 2", teamManager: "Manager 2" },
    {id:6,employeeId:1, title: "OMTBAPP", startDate: new Date("2023-02-02"), status: "Completed" ,description: "Description for Project 2", teamManager: "Manager 2"},
    {id:7,employeeId:1, title: "OCBAPP", startDate: new Date("2023-02-02"), status: "Canceled" ,description: "Description for Project 2", teamManager: "Manager 2"},
    {id:8,employeeId:1, title: "EKrushi", startDate: new Date("2023-02-02"), status: "Canceled",description: "Description for Project 2", teamManager: "Manager 2" },
  ];
  projectTeamMembers:{projectId:number;teammembers:string[]}[]=[
    {projectId:1,teammembers:["Rushikesh Chikane" ,"Abhay Navale","Akshay Tanpure"]},
    {projectId:2,teammembers:["Sahil Mankar" ,"Shubham Teli","Akash Ajab"]},
    {projectId:3,teammembers:["Rushikesh Kale" ,"Abhi Shinde","Akashdeep Karale"]},
    {projectId:4,teammembers:["Rushikesh Chikane" ,"Abhay Navale","Akshay Tanpure"]},
    {projectId:5,teammembers:["Sahil Mankar" ,"Shubham Teli","Akash Ajab"]},
    {projectId:6,teammembers:["Rushikesh Chikane" ,"Abhay Navale","Akshay Tanpure"]},
    {projectId:7,teammembers:["Sahil Mankar" ,"Shubham Teli","Akash Ajab"]},
    {projectId:8,teammembers:["Rushikesh Kale" ,"Abhi Shinde","Akashdeep Karale"]},
  ]

  constructor() { }
  private selectedProjectIdSubject=new BehaviorSubject<any>(null);
  selectedProjectId$=this.selectedProjectIdSubject.asObservable();
  
  setSelectedProjectId(id:number){
    this.selectedProjectIdSubject.next(id)
  }
  

  getProjects(): Observable<{ id: number; title: string; startDate: Date }[]> {
    const summaryData = this.projects.map(project => ({
      id: project.id,
      title: project.title,
      status: project.status,
      startDate: project.startDate
    }));
    return of(summaryData);
  }

  getProjectDetails(id: number): Observable<{
    id: number;
    title: string;
    startDate: Date;
    status: string;
    description: string;
    teamManager: string;
  }> {
    const project = this.projects.find(p => p.id === id);
    if (project) {
      return of({
        id: project.id,
        title: project.title,
        startDate: project.startDate,
        status: project.status,
        description: project.description,
        teamManager: project.teamManager
      });
    } else {
      return of({
        id: -1,
        title: '',
        startDate: new Date(),
        status: '',
        description: '',
        teamManager: ''
      });
    }
  }
  getProjectTeamMembers(projectId:number):Observable<{teammembers:string[]}>{
    const members=this.projectTeamMembers.find(p=>p.projectId == projectId);
    if (members){
      return of({
teammembers:members.teammembers
      }
      )
    }
    else{
      return of({
       teammembers:[]
      });
    }
    

  }

}
