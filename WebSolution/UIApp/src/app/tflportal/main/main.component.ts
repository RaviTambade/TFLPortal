import { Component, OnInit } from '@angular/core';
import { TflportalService } from '../tflportal.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';
import { JwtService } from 'src/app/shared/services/jwt.service';
import { TokenClaims } from 'src/app/shared/Enums/tokenclaims';

@Component({
  selector: 'insight-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isLogInClicked: boolean = false;
  showsidebar = false;
  constructor(private tflSvc: TflportalService, private jwtSvc:JwtService, private router: Router) {}

  userName: string = 'Akash';
  isLoggedIn:boolean=false;

  ngOnInit(): void {
    let jwt = localStorage.getItem(LocalStorageKeys.jwt);
    if (jwt != null) {
      this.isLoggedIn = true;
    }

    this.userName=this.jwtSvc.getClaimFromToken(TokenClaims.userName);
    

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
      let jwt = localStorage.getItem(LocalStorageKeys.jwt);
      if (jwt != null) {
        this.isLoggedIn = true;
        this.userName=this.jwtSvc.getClaimFromToken(TokenClaims.userName);
      }

    });
  }

  onClickLogOut() {
    localStorage.clear();
    this.isLoggedIn = false;
  }
}
