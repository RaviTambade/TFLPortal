import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { updateContact } from 'src/app/shared/Entities/UserMgmt/UpdateContact';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

export function confirmContactNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value.newContactNumber === control.value.confirmContactNumber
      ? null
      : { ContactNumberNoMatch: true };
  };
}

@Component({
  selector: 'update-contact-number',
  templateUrl: './update-contact-number.component.html',
})


export class UpdateContactNumberComponent {

  showPassword: boolean = false;
  showNewContactNumber: boolean = false;
  showConfirmContactNumber: boolean = false;
  isInvalidCredentails: boolean = false;
  changeContactNumberForm!: FormGroup;

  // @Output() onPasswordChange = new EventEmitter<StateChangeEvent>();
  constructor(private membershipSvc: MembershipService) {}

  ngOnInit(): void {
    this.changeContactNumberForm = new FormGroup(
      {
        newContactNumber: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
        ]),  
        confirmContactNumber: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      },
      { validators: [confirmContactNumberValidator()] }
    );
  }

  get newContactNumber() {
    return this.changeContactNumberForm.get('newContactNumber')!;
  }
  get password() {
    return this.changeContactNumberForm.get('password')!;
  }
  get confirmContactNumber() {
    return this.changeContactNumberForm.get('confirmContactNumber')!;
  }

  // ngAfterViewInit(): void {
  //   window.scrollTo(0, document.body.scrollHeight);
  // }

  onUpdateContactNumber() {
    if (this.changeContactNumberForm.invalid) {
      for (const control of Object.keys(this.changeContactNumberForm.controls)) {
        this.changeContactNumberForm.controls[control].markAsTouched();
      }
      return;
    }

    let credential: updateContact = {
      newContactNumber: this.newContactNumber.value,
      password: this.password.value,
    };

    this.membershipSvc.updateContactNumber(credential).subscribe((response) => {
      if (response) {
        alert('ContactNumber changed');
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
  //   // this.onPasswordChange.emit({ isStateUpdated: false });
  }
}
