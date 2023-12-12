import { Component, OnInit } from '@angular/core';
import { TflportalService } from '../tflportal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'insight-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isLogInClicked: boolean = false;

  constructor(private tflSvc: TflportalService,private router:Router) {}
  userName: string = '';
  ngOnInit(): void {
    let name = localStorage.getItem('name');
    if (name != null) {
      this.userName = name;
    }

    this.tflSvc.loginSuccess$.subscribe(() => {
      this.isLogInClicked = false;
      let name = localStorage.getItem('name');
      if (name != null) {
        this.userName = name;
      }
    });

    console.log(this.router.url)
  }

  onLogInClick() {
    this.isLogInClicked = true;
  }
  onClickLogOut() {
    localStorage.clear();
    this.userName=''
    this.isLogInClicked=true;
  }
}
