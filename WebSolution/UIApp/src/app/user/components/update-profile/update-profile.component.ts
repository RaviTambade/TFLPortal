import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/user/Models/User';
import { MembershipService } from 'src/app/shared/services/membership.service';
import { EmployeeDetails } from 'src/app/activity/Models/EmployeeDetails';
import { StateChangeEvent } from '../../Models/stateChangeEvent';

@Component({
  selector: 'update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent {
  @Input() user: EmployeeDetails = {
    employeeId: 0,
    userId: 0,
    aadharId: '',
    hireDate: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    imageUrl: '',
    birthDate: '',
    contactNumber: ''
  };

  @Output() onUpdateFinished = new EventEmitter<StateChangeEvent>();

  userForm: FormGroup;

  constructor(private svc: MembershipService) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      aadharId: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
      ]),
      birthDate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.email,
      ]),
    });
  }
  ngOnInit(): void {
    this.userForm.setValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      aadharId: this.user.aadharId,
      birthDate: this.user.birthDate,
      gender: this.user.gender,
      email: this.user.email,
    });
   

  }

  get firstname() {
    return this.userForm.get('firstName')!;
  }

  get lastname() {
    return this.userForm.get('lastName')!;
  }

  get email() {
    return this.userForm.get('email')!;
  }

  get aadharId() {
    return this.userForm.get('aadharId')!;
  }

  get dob() {
    return this.userForm.get('birthDate')!;
  }
  get gender() {
    return this.userForm.get('gender')!;
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }

  updateUser() {
 
    if (this.userForm.valid) {
        let user:User={
          firstName: this.firstname.value,
          lastName: this.lastname.value,
          aadharId: this.aadharId.value,
          birthDate: this.dob.value,
          gender: this.gender.value,
          email: this.email.value,
          id: this.user.userId,
          imageUrl: this.user.imageUrl,
          contactNumber: this.user.contactNumber
        }
      console.log(this.user);
      this.svc.updateUser(user.id, user).subscribe((response) => {
        this.onUpdateFinished.emit({ isStateUpdated: true });
      });
    }
  }

  cancelupdateUser() {
    this.onUpdateFinished.emit({ isStateUpdated: false });
  }
}
