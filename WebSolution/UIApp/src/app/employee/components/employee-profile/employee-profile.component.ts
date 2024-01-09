import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetails } from 'src/app/activity/Models/EmployeeDetails';
import { HrService } from 'src/app/shared/services/hr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent {
  employee: EmployeeDetails | undefined;
  employeeId: number |undefined;
  imageServer = environment.imagerServerUrl;
  constructor(private hrsvc: HrService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.employeeId = Number(params.get('id'));
      this.hrsvc.getEmployeeDetails(this.employeeId).subscribe((res) => {
        this.employee = res;
        console.log(res);
      });
    });
  }
}
