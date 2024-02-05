import { Component, OnInit } from '@angular/core';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';
import { LayoutService } from '../../Services/layout.service';
import { AuthService } from 'src/app/shared/services/Authentication/auth.service';

@Component({
  selector: 'layout-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  
  isLogInClicked: boolean = false;
  userName: string = '';
  isLoggedIn: boolean = false;
  showUserLinks: boolean = false;
  isExpanded = false;

  constructor(
    private layoutSvc: LayoutService,
    private authSvc: AuthService,
  ) {}

  ngOnInit(): void {
    let jwt = localStorage.getItem(LocalStorageKeys.jwt);
    if (jwt != null) {
      this.isLoggedIn = true;
    }

    this.userName = this.authSvc.getClaimFromToken(TokenClaims.userName);

    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event: any) => {
    //     if (event.url == '/home' || event.url == '/auth/login') {
    //       this.showsidebar = false;
    //     } else {
    //       this.showsidebar = true;
    //     }
    //   });

    this.layoutSvc.loginSuccess$.subscribe(() => {
      let jwt = localStorage.getItem(LocalStorageKeys.jwt);
      if (jwt != null) {
        this.isLoggedIn = true;
        this.userName = this.authSvc.getClaimFromToken(TokenClaims.userName);
      }
    });
  }

  onClickLogOut() {
    localStorage.clear();
    this.isLoggedIn = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
