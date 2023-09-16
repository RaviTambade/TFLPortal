import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee: { id: number; name: string; contactnumber: string; department: string; position: string, manager: string }[] = [
    {
      id: 1,
      name: 'Rushikesh Chikane',
      contactnumber: '9089087898',
      department: 'HR',
      position: 'Manager',
      manager: 'Vaibhav Kale'
    },
    {
      id: 2,
      name: 'Abhay Navale',
      contactnumber: '9089087898',
      department: 'Marketing',
      position: 'Coordinator',
      manager: 'Vaibhav Kale'
    },
    {
      id: 3,
      name: 'Baban Shinde',
      contactnumber: '9089087898',
      department: 'Finance',
      position: 'Analyst',
      manager: 'Vaibhav Kale'
    },
    {
      id: 4,
      name: 'Akshay Tanpure',
      contactnumber: '9089087898',
      department: 'HR',
      position: 'Manager',
      manager: 'Vaibhav Kale'
    },
    {
      id: 5,
      name: 'Akash Ajab ',
      contactnumber: '9089087898',
      department: 'Marketing',
      position: 'Coordinator',
      manager: 'Vaibhav Kale'
    },
    {
      id: 6,
      name: 'Sahil Mankar',
      contactnumber: '9089087898',
      department: 'Finance',
      position: 'Analyst',
      manager: 'Vaibhav Kale'
    },
    {
      id: 7,
      name: 'Vedant Yadav',
      contactnumber: '9089087898',
      department: 'HR',
      position: 'Manager',
      manager: 'Vaibhav Kale'
    },
    {
      id: 8,
      name: 'Jayesh Erande',
      contactnumber: '9089087898',
      department: 'Marketing',
      position: 'Coordinator',
      manager: 'Vaibhav Kale'
    },
  ];
  constructor() { }

  getEmployeeDetails(name: string): Observable<{ id: number; name: string; contactnumber: string; department: string; position: string, manager: string }> {
    const emp = this.employee.find((employ) => employ.name == name)
    if (emp) {
      return of({
        id: emp.id,
        name: emp.name,
        contactnumber: emp.contactnumber,
        department: emp.department,
        position: emp.position,
        manager: emp.manager
      })
    }
    else {
      return of({
        id: 0,
        name: '',
        contactnumber: '',
        department: '',
        position: '',
        manager: ''
      })
    }
  }

}
