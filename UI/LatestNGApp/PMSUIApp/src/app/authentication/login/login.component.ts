import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalStorageKeys } from 'src/app/Models/Enums/local-storage-keys';
import { Role } from 'src/app/Models/Enums/role';
import { Credential } from 'src/app/Models/credential';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
})
export class LoginComponent {
 
  roles: string[] = [];
  istokenReceived: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService
  ) { }

  onReceiveToken(event: any) {
    if (event.token) {
      localStorage.setItem(LocalStorageKeys.jwt, event.token);
      this.roles = this.authService.getRolesFromToken();
      console.log(this.roles);
      if (this.roles?.length == 1) {
        const role = this.roles[0];
        this.navigateByRole(role);
      } else if (this.roles?.length > 1) {
        this.istokenReceived = true;
      }
    }
  }

  navigateByRole(role: string) {
    switch (role) {
      case Role.director:
        this.router.navigate(['director/dashboard']);
        this.authService.reloadSubject.next();
        break;

      case Role.HRManager:
        this.router.navigate(['hrmanager/dashboard']);
        this.authService.reloadSubject.next();
        break;

      case Role.TeamManager:
        this.router.navigate(['teammanager/dashboard']);
        this.authService.reloadSubject.next();
        break;

      case Role.TeamMember:
        this.router.navigate(['teammember/projects']);
        this.authService.reloadSubject.next();
        break;
    }
  }
}
