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
  credential: Credential = {
    contactNumber: '',
    password: '',
  };
  userId: number | undefined;
  roles: string[] = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService
  ) { }

  public onSignIn() {
    console.log('Validating user');
    this.authService.validate(this.credential).subscribe((response) => {
      if (response != null) {
        localStorage.setItem('jwt', response.token);
        let contactNumber = this.authService.getContactNumberFromToken();
        if (contactNumber !== null) {
          this.userService
            .getUserByContact(contactNumber)
            .subscribe((response) => {
              let userId = response.id;
              localStorage.setItem(LocalStorageKeys.userId, userId.toString());
              console.log(userId);
              this.userService.getUserRole(userId).subscribe((response) => {
                this.roles = response;
                console.log(this.roles);
                const role = this.roles[0];
                console.log(role);
                this.navigateByRole(role);
              });
            });
        }
      }
    });
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
