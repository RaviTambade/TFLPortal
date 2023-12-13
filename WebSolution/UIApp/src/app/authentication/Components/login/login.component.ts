import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICredential } from '../../Models/icredential';
import { AuthService } from '../../Services/auth.service';
import { TokenClaims } from '../../../shared/Enums/tokenclaims';
import { JwtService } from 'src/app/shared/services/jwt.service';
import { LocalStorageKeys } from '../../../shared/Enums/local-storage-keys';
import { HrService } from 'src/app/shared/services/hr.service';
import { LayoutService } from 'src/app/layout/Services/layout.service';

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
    private jwtSvc: JwtService,
    private hrSvc: HrService,
    private router: Router,
    private layoutSvc: LayoutService
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

    let credential: ICredential = {
      contactNumber: this.contactnumber.value,
      password: this.password.value,
      lob: this.lob,
    };

    this.authSvc.signIn(credential).subscribe({
      next: (response) => {
        if (response.token == '' || !response) {
          this.isCredentialInvalid = true;
          setTimeout(() => {
            this.isCredentialInvalid = false;
          }, 3000);
        }
        if (response.token != '') {
          localStorage.setItem(LocalStorageKeys.jwt, response.token);
            this.navigate();
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {},
    });
  }

  navigate() {
    let userId = Number(this.jwtSvc.getClaimFromToken(TokenClaims.userId));
    this.hrSvc.getEmployeeByUserId(userId).subscribe((res) => {
      localStorage.setItem(LocalStorageKeys.employeeId, res.id.toString());
      this.router.navigate(['/']);
      this.layoutSvc.onSucess();
    });
  }
}
