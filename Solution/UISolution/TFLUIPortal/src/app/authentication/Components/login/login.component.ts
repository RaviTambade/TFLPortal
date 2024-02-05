import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credential } from '../../../Entities/credential';

// import { LayoutService } from 'src/app/layout/Services/layout.service';
import { Role } from 'src/app/shared/enums/role';
import { AuthService } from 'src/app/shared/services/Authentication/auth.service';
import { HrService } from 'src/app/shared/services/Staffing/hr.service';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  isCredentialInvalid: boolean = false;
  lob: string = 'PMS';
  role: string = '';
  constructor(
    private authSvc: AuthService,
    private hrSvc: HrService,
    private router: Router,
    // private layoutSvc: LayoutService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      contactNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25),
      ]),
    });
  }

  get contactnumber() {
    return this.loginForm.get('contactNumber')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onSignIn() {
    if (this.loginForm.invalid) {
      for (const control of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[control].markAsTouched();
      }
      return;
    }

    let credential: Credential = {
      contactNumber: this.contactnumber.value,
      password: this.password.value,
      lob: this.lob,
    };

    this.authSvc.signIn(credential).subscribe({
      next: (response) => {
        console.log(response)
        if (response.token == '' || !response) {
          this.isCredentialInvalid = true;
          setTimeout(() => {
            this.isCredentialInvalid = false;
          }, 3000);
        }
        if (response.token != '') {
          let role = this.authSvc.getClaimFromToken(TokenClaims.role);
          this.navigateByRole(role);
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {},
    });
  }

  navigateByRole(role: string) {
    let userId = Number(this.authSvc.getClaimFromToken(TokenClaims.userId));
    this.hrSvc.getEmployeeByUserId(userId).subscribe((res) => {
      localStorage.setItem(LocalStorageKeys.employeeId, res.id.toString());
      switch (role) {
        case Role.Employee:
          this.router.navigate(['/employee']);
          break;
        case Role.HRManager:
          this.router.navigate(['/hrmanager']);
          break;
        case Role.Director:
          this.router.navigate(['/director']);
          break;
        case Role.ProjectManager:
          this.router.navigate(['/projectmanager']);
          break;
      }
      // this.layoutSvc.onSucess();
    });
  }
}
