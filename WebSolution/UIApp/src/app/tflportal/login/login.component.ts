import { Component, EventEmitter, Output } from '@angular/core';
import { TflportalService } from '../tflportal.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // contactNumber: string = '';
  // passWord: string = '';

  constructor(private tflSvc:TflportalService ,private router:Router){}
 



  // credential: ICredential;
  loginForm!: FormGroup;
  showPassword: boolean = false;

  @Output() validSignIn = new EventEmitter<any>();
  isCredentialInvalid: boolean = false;



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

  onSubmit() {

    let contactNumber=this.contactnumber.value;
    let password=this.password.value;
    if (contactNumber == '8530728589' && password == 'password') {

      localStorage.setItem("role","Employee");
      localStorage.setItem("name","Akash");
      this.tflSvc.onSucess();
      this.router.navigate(['/']);

      // alert('login sucessfully');
    }
  }

}
