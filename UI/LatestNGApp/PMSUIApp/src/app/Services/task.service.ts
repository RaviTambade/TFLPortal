import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks:{id:number;projectName:string;title:string;status:string;projectId:number;description:string;date:string;fromTime:string;toTime:string}[]=[
  {id:1, projectName:"PMSAPP",title:"Develop feature login for Project PMS App",status:"In-Progress",projectId:1,description:"please arrange the meeting sheduling prosess quickly",date:"2022-02-02",fromTime:"3:00pm",toTime:"5:00pm"},
  {id:2, projectName:"EKrushi",title:"Troubleshoot and fix bugs in module timesheet",status:"Pending",projectId:1,description:"please arrange the meeting sheduling prosess quickly",date:"2022-02-03",fromTime:"3:00pm",toTime:"5:00pm"},
  {id:3, projectName:"HMAPP",title:"Check data validation for Form adding timesheet",status:"In-Progress",projectId:3,description:"please arrange the meeting sheduling prosess quickly",date:"2022-02-04",fromTime:"3:00pm",toTime:"5:00pm"},
  {id:4, projectName:"EAgro",title:"Optimize performance of Database PMS",projectId:2,status:"Pending",description:"please arrange the meeting sheduling prosess quickly",date:"2022-02-05",fromTime:"3:00pm",toTime:"5:00pm"},
  {id:5, projectName:"Inventrory",title:"Write unit tests for Module Timerecord",status:"Completed",projectId:4,description:"please arrange the meeting sheduling prosess quickly",date:"2022-02-06",fromTime:"3:00pm",toTime:"5:00pm"},
  {id:6, projectName:"OMTBAPP",title:"Refactor code for better maintainability",status:"In-Progress",projectId:5,description:"please arrange the meeting sheduling prosess quickly",date:"2022-02-07",fromTime:"3:00pm",toTime:"5:00pm"},
  {id:7, projectName:"OCBAPP",title:"Create technical documentation for project PMSApp",status:"In-Progress",projectId:6,description:"please arrange the meeting sheduling prosess quickly",date:"2022-02-08",fromTime:"3:00pm",toTime:"5:00pm"},
  {id:8, projectName:"EKrushi",title:"Develop RESTful API for EKSApp",projectId:7,status:"Pending",description:"please arrange the meeting sheduling prosess quickly",date:"2022-02-09",fromTime:"3:00pm",toTime:"5:00pm"},
]
  constructor(private projectService:ProjectService) { }
  private selectedTaskIdSubject=new BehaviorSubject<any>(null);
  selectedTaskId$=this.selectedTaskIdSubject.asObservable();
  
  setSelectedTaskId(id:number |null){
    this.selectedTaskIdSubject.next(id)
  }
  
  getAllTasks(): Observable<{ id: number;status:string; title: string; projectName: string }[]> {
    const tasks = this.tasks.map(task => ({
      id: task.id,
      status:task.status,
      title: task.title,
      projectName: task.projectName
    }));
    return of(tasks);
  }
  private getProjectNameById(projectId: number): string {
    const project = this.projectService.projects.find(project => project.id === projectId);
    return project ? project.title : '';
  }

  getTaskDetails(taskId:number):Observable<{id:number;title:string;status:string;projectId:number;projectName:string;description:string;date:string;fromTime:string;toTime:string}>{
    const taskdetails=this.tasks.find(t => t.id == taskId);
    if(taskdetails){
      return of({
        id:taskdetails.id,
        title:taskdetails.title,
        status:taskdetails.status,
        projectName:taskdetails.projectName,
        description:taskdetails.description,
        date:taskdetails.date,
        fromTime: taskdetails.fromTime,
        toTime:taskdetails.toTime,
        projectId:taskdetails.projectId
      })
    }
    else{
      return of({
        id:-1,
        title:'',
        status:'',
        projectName:'',
        description:'',
        date:'',
        fromTime: '',
        toTime:'',
        projectId:-1

      })
    }
  }

  getTasksOfProject(projectId:number):Observable<{id:number;title:string;projectId:number;projectName:string;description:string;date:string;fromTime:string;toTime:string}>{
    const taskdetails=this.tasks.find(t => t.id == projectId);
    if(taskdetails){
      return of({
        id:taskdetails.id,
        title:taskdetails.title,
        projectName:taskdetails.projectName,
        description:taskdetails.description,
        date:taskdetails.date,
        fromTime: taskdetails.fromTime,
        toTime:taskdetails.toTime,
        projectId:taskdetails.projectId
      })
    }
    else{
      return of({
        id:-1,
        title:'',
        projectName:'',
        description:'',
        date:'',
        fromTime: '',
        toTime:'',
        projectId:-1

      })
    }
  }
    getAllTasksOfProject(projectId: number): Observable<{ id: number; title: string; date: string; projectId: number }[]> {
      const tasksOfProject = this.tasks.filter(t => t.projectId === projectId);   
      if (tasksOfProject.length > 0) {
        return of(tasksOfProject);
      } else {
        return of([{ id: -1, title: '', date: '', projectId: -1 }]);
      }
}
}
