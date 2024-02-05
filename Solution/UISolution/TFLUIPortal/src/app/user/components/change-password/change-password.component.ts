import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { UpdatePassword } from 'src/app/Entities/UpdatePassword';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';
import { StateChangeEvent } from '../../Models/stateChangeEvent';

export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value.newPassword === control.value.confirmPassword
      ? null
      : { PasswordNoMatch: true };
  };
}

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  showOldPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  isInvalidCredentails: boolean = false;

  changePasswordForm!: FormGroup;

  // @Output() onPasswordChange = new EventEmitter<StateChangeEvent>();
  constructor(private membershipSvc: MembershipService) {}

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup(
      {
        oldPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
        ]),
        newPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
        ]),
      },
      { validators: [confirmPasswordValidator()] }
    );
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword')!;
  }
  get newPassword() {
    return this.changePasswordForm.get('newPassword')!;
  }
  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword')!;
  }

  // ngAfterViewInit(): void {
  //   window.scrollTo(0, document.body.scrollHeight);
  // }

  onUpdatePassword() {
    if (this.changePasswordForm.invalid) {
      for (const control of Object.keys(this.changePasswordForm.controls)) {
        this.changePasswordForm.controls[control].markAsTouched();
      }
      return;
    }

    let credential: UpdatePassword = {
      oldPassword: this.oldPassword.value,
      newPassword: this.newPassword.value,
    };

    this.membershipSvc.changePassword(credential).subscribe((response) => {
      if (response) {
        alert('Password changed');
        // this.onPasswordChange.emit({ isStateUpdated: true });
      } else {
        this.isInvalidCredentails = true;
        setTimeout(() => {
          this.isInvalidCredentails = false;
        }, 3000);
      }
    });
  }

  onCancelClick() {
    // this.onPasswordChange.emit({ isStateUpdated: false });
  }
}
