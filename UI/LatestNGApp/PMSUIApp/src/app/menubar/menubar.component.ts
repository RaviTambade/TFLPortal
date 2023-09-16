import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Role } from '../Models/Enums/role';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  // role:string=''
  Role=Role
  roles: string[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    if (userId !== null) {
      this.userService.getUserRole(Number(userId)).subscribe((res) => {
        this.roles = res;
      });
    }
  }

  isUserHaveRequiredRole( role:string): boolean {
    let userrole = this.roles[0];
    if (userrole == role) {
      return true;
    } else {
      return false;
    }
  }
  isLoggedIn(): boolean {
    let jwt = localStorage.getItem("jwt")
    return jwt != null;
  }
}
