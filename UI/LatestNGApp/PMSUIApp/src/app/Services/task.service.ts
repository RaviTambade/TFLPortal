import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ProjectService } from './project.service';
import { HttpClient } from '@angular/common/http';
import { Projecttaskcount } from '../Models/projecttaskcount';
import { Mytasklist } from '../Models/mytasklist';
import { Taskdetail } from '../Models/taskdetail';
import { Moretaskdetail } from '../Models/moretaskdetail';
import { Alltasklist } from '../Models/alltasklist';
import { Taskidwithtitle } from '../Models/taskidwithtitle';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: {
    id: number;
    projectName: string;
    title: string;
    status: string;
    projectId: number;
    description: string;
    date: string;
    fromTime: string;
    toTime: string;
    employee: string;
  }[] = [
    {
      id: 1,
      projectName: 'PMSAPP',
      title: 'Develop feature login for Project PMS App',
      status: 'In-Progress',
      projectId: 1,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-02',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Rushikesh Chikane',
    },
    {
      id: 2,
      projectName: 'EKrushi',
      title: 'Troubleshoot and fix bugs in module timesheet',
      status: 'Pending',
      projectId: 2,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-03',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Abhay Navale',
    },
    {
      id: 3,
      projectName: 'HMAPP',
      title: 'Check data validation for Form adding timesheet',
      status: 'In-Progress',
      projectId: 3,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-04',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Baban Shinde',
    },
    {
      id: 4,
      projectName: 'EAgro',
      title: 'Optimize performance of Database PMS',
      projectId: 4,
      status: 'Pending',
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-05',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Akshay Tanpure',
    },
    {
      id: 5,
      projectName: 'Inventrory',
      title: 'Write unit tests for Module Timerecord',
      status: 'Completed',
      projectId: 5,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-06',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Akash Ajab',
    },
    {
      id: 6,
      projectName: 'OMTBAPP',
      title: 'Refactor code for better maintainability',
      status: 'In-Progress',
      projectId: 6,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-07',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Sahil Mankar',
    },
    {
      id: 7,
      projectName: 'OCBAPP',
      title: 'Create technical documentation for project PMSApp',
      status: 'In-Progress',
      projectId: 7,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-08',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Vedant Yadav',
    },
    {
      id: 8,
      projectName: 'EKrushi',
      title: 'Develop RESTful API for EKSApp',
      projectId: 8,
      status: 'Pending',
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-09',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Jayesh Erande',
    },
    {
      id: 9,
      projectName: 'PMSAPP',
      title: 'Develop feature login for Project PMS App',
      status: 'In-Progress',
      projectId: 1,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-02',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Rushikesh Chikane',
    },
    {
      id: 10,
      projectName: 'EKrushi',
      title: 'Troubleshoot and fix bugs in module timesheet',
      status: 'Pending',
      projectId: 2,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-03',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Baban Shinde',
    },
    {
      id: 11,
      projectName: 'HMAPP',
      title: 'Check data validation for Form adding timesheet',
      status: 'In-Progress',
      projectId: 3,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-04',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Akshay Tanpure',
    },
    {
      id: 12,
      projectName: 'EAgro',
      title: 'Optimize performance of Database PMS',
      projectId: 4,
      status: 'Pending',
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-05',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Akash Ajab',
    },
    {
      id: 13,
      projectName: 'Inventrory',
      title: 'Write unit tests for Module Timerecord',
      status: 'Completed',
      projectId: 5,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-06',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Sahil Mankar',
    },
    {
      id: 14,
      projectName: 'OMTBAPP',
      title: 'Refactor code for better maintainability',
      status: 'In-Progress',
      projectId: 6,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-07',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Rushikesh Chikane',
    },
    {
      id: 15,
      projectName: 'OCBAPP',
      title: 'Create technical documentation for project PMSApp',
      status: 'In-Progress',
      projectId: 7,
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-08',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Vedant Yadav',
    },
    {
      id: 16,
      projectName: 'EKrushi',
      title: 'Develop RESTful API for EKSApp',
      projectId: 8,
      status: 'Pending',
      description: 'please arrange the meeting sheduling prosess quickly',
      date: '2022-02-09',
      fromTime: '3:00pm',
      toTime: '5:00pm',
      employee: 'Akash Ajab',
    },
  ];
  constructor(private projectService: ProjectService,private httpClient:HttpClient) {}
  private selectedTaskIdSubject = new BehaviorSubject<any>(null);
  selectedTaskId$ = this.selectedTaskIdSubject.asObservable();

  setSelectedTaskId(id: number | null) {
    this.selectedTaskIdSubject.next(id);
  }

  getAllTasks(): Observable<
    {
      id: number;
      status: string;
      title: string;
      projectName: string;
      employee: string;
    }[]
  > {
    const tasks = this.tasks.map((task) => ({
      id: task.id,
      status: task.status,
      title: task.title,
      employee: task.employee,
      projectName: task.projectName,
    }));
    return of(tasks);
  }
  private getProjectNameById(projectId: number): string {
    const project = this.projectService.projects.find(
      (project) => project.id === projectId
    );
    return project ? project.title : '';
  }

 
  getTasksOfProject(
    projectId: number
  ): Observable<{
    id: number;
    title: string;
    projectId: number;
    projectName: string;
    description: string;
    date: string;
    fromTime: string;
    toTime: string;
    employee: string;
  }> {
    const taskdetails = this.tasks.find((t) => t.id == projectId);
    if (taskdetails) {
      return of({
        id: taskdetails.id,
        title: taskdetails.title,
        projectName: taskdetails.projectName,
        description: taskdetails.description,
        date: taskdetails.date,
        fromTime: taskdetails.fromTime,
        toTime: taskdetails.toTime,
        projectId: taskdetails.projectId,
        employee: taskdetails.employee,
      });
    } else {
      return of({
        id: -1,
        title: '',
        projectName: '',
        description: '',
        date: '',
        fromTime: '',
        toTime: '',
        projectId: -1,
        employee: '',
      });
    }
  }
  getAllTasksOfProject(
    projectId: number
  ): Observable<
    { id: number; title: string; date: string; projectId: number }[]
  > {
    const tasksOfProject = this.tasks.filter((t) => t.projectId === projectId);
    if (tasksOfProject.length > 0) {
      return of(tasksOfProject);
    } else {
      return of([{ id: -1, title: '', date: '', projectId: -1 }]);
    }
  }
  getTasksByDate(date: string) {
    return this.tasks.filter((task) => task.date === date);
  }

  GetProjectTaskCount(projectId:number):Observable<Projecttaskcount>{
    let url="http://localhost:5283/api/tasks/count/" +projectId
    return this.httpClient.get<Projecttaskcount>(url)
  } 
  
  GetMyTaskList(teamMemberId:number,timePeriod:string):Observable<Mytasklist[]>{
    let url="http://localhost:5283/api/tasks/mytasks/" +teamMemberId +"/" +timePeriod
    return this.httpClient.get<Mytasklist[]>(url)
  }
  getTaskDetails(taskId:number):Observable<Taskdetail>{
    let url="http://localhost:5283/api/tasks/taskDetail/" +taskId
    return this.httpClient.get<Taskdetail>(url)
  }
  getMoreTaskDetails(taskId:number):Observable<Moretaskdetail>{
    let url="http://localhost:5283/api/tasks/moretaskDetail/" +taskId
    return this.httpClient.get<Moretaskdetail>(url)
  }
  getAllTaskList(employeeId:number,timePeriod:string):Observable<Alltasklist[]>{
    let url="http://localhost:5283/api/tasks/alltasks/" + employeeId + "/" +timePeriod
    return this.httpClient.get<Alltasklist[]>(url)
  }
  getTaskIdWithTitle(employeeId :number,projectId :number,status :string):Observable<Taskidwithtitle[]>{
    let url="http://localhost:5283/api/tasks/tasktitle/ " + employeeId + "/" + projectId + "/" + status
    return this.httpClient.get<Taskidwithtitle[]>(url)
  }
}
