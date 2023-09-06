import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  employee: Employee | any;
  Id: number | any;
  status : boolean |undefined;
  message: string | undefined;
  progress: number =0;
  file:any;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private svc: EmployeeService, private router: Router, private route: ActivatedRoute, private http:HttpClient) {
    this.employee = {
      firstName: '',
      lastName: '',
      birthDate: '',
      hireDate: '',
      contactNumber: '',
      image :'',
      userId: 0,
     
    };
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.Id = params.get('empid')
    // })

  }

  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    this.file = <File>files[0];
    console.log(this.file.name);
  }

  addEmployee(form:any): void {
    console.log(form);
    console.log(this.employee);
    this.employee.image= "/assets/imges/"+this.file.name;
    console.log(this.employee.image);
    this.svc.addEmployee(this.employee).subscribe((response) => {
      this.status = response;
      console.log("Insert is Called"+ response);

  
    });

    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
  
    this.http.post('http://localhost:5230/api/Employees/', formData, { reportProgress: true, observe: 'events' })
      .subscribe({
        next: (event) => {
           if (event.type === HttpEventType.UploadProgress && event.total) 
           this.progress = Math.round(100 * event.loaded / event.total);
          if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
            alert("Employee added successfully")
            this.onUploadFinished.emit(event.body);
            this.router.navigate(['/employee-list']);
          }
          
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });

    // this.svc.addEmployee(this.employee).subscribe((response) => {
    //   this.status = response;
    //   console.log(response);
    //   if (response) {
    //     alert("Employee added successfully")
    //     this.router.navigate(['/employeelist']);
    //   }
    //   else {
    //     alert("Check the form again ....")
    //   }
    //})
  };



}
