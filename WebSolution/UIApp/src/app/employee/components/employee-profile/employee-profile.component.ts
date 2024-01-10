import { HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetails } from 'src/app/activity/Models/EmployeeDetails';
import { User } from 'src/app/resource-management/Models/User';
import { HrService } from 'src/app/shared/services/hr.service';
import { MembershipService } from 'src/app/shared/services/membership.service';
import { environment } from 'src/environments/environment';
import { StateChangeEvent } from '../../Models/stateChangeEvent';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent {
  employee: EmployeeDetails | undefined;
  employeeId: number |undefined;
  imageServer = environment.imagerServerUrl;
  selectedFile: File | undefined;
  selectedImageUrl: string | undefined;
  defaultImage: string = 'AkshayTanpure.jpg';
  updateProfileStatus: boolean = false;

  

  constructor(private hrsvc: HrService, private membershipsvc:MembershipService,
               private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.employeeId = Number(params.get('id'));
      this.hrsvc.getEmployeeDetails(this.employeeId).subscribe((res) => {
        this.employee = res;
        console.log(res);
      });
    });
  }


 
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile)
      this.selectedImageUrl = URL.createObjectURL(this.selectedFile);
  }

  confirmImage() {
    if(this.employee==undefined){
      return;
    }
    if (this.selectedFile) {
      const formData = new FormData();
      let  newImageUrl:string=crypto.randomUUID() + '.' + this.selectedFile.name.split('.').pop();
     
      formData.append('file', this.selectedFile, newImageUrl);
      
      this.membershipsvc.uploadFile(newImageUrl, formData).subscribe({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            console.log("finished");
            if(this.employee){
            let obj:User={
              id: this.employee.userId,
              firstName: this.employee.firstName,
              lastName: this.employee.lastName,
              birthDate: this.employee.birthDate,
              aadharId: this.employee.aadharId,
              imageUrl: this.employee.imageUrl,
              gender: this.employee.gender,
              email: this.employee.email,
              contactNumber: this.employee.contactNumber,
            }
            this.membershipsvc
              .updateUser(obj.id, obj)
              .subscribe((response) => {
                if(this.employee)
                this.employee.imageUrl=newImageUrl;
              });
          }
        }
        },
      });

      this.selectedFile = undefined;
      this.selectedImageUrl = undefined;
    }
  }
  cancelImage() {
    this.selectedFile = undefined;
    this.selectedImageUrl=undefined;
  }
  onClickUpdateProfile() {
    this.updateProfileStatus = true;
  }
  
  closeEditUserComponent(event: StateChangeEvent) {
    this.updateProfileStatus = false;
    if (event.isStateUpdated) {
      this.hrsvc.getEmployeeDetails(this.employee?.employeeId!).subscribe((res) => {
        this.employee = res;
        console.log(res);
    })
  }
}
}