import { Component, OnInit } from '@angular/core';
import { TflportalService } from '../tflportal.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'insight-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isLogInClicked: boolean = false;
  showsidebar = false;
  constructor(private tflSvc: TflportalService, private router: Router) {}

  userName: string = '';
  ngOnInit(): void {
    let name = localStorage.getItem('name');
    if (name != null) {
      this.userName = name;
    }

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url == '/home' || event.url == '/login') {
          console.log(event.url);
          this.showsidebar = false;
        } else {
          this.showsidebar = true;
        }
      });

    this.tflSvc.loginSuccess$.subscribe(() => {
      // this.showsidebar = true;
      let name = localStorage.getItem('name');
      if (name != null) {
        this.userName = name;
      }
    });
  }

  onClickLogOut() {
    localStorage.clear();
    this.userName = '';
  }
}
