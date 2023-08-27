import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) { }
  isroleEmployee(): boolean {
  let role = localStorage.getItem("role")
  return role == 'Developer';
}


isroleManager(): boolean {
  const role = localStorage.getItem("role")
  return role == 'Manager';
}

}





// implements OnInit {
//   menuItems: any[];

//   constructor() { }

//   ngOnInit() {
//     this.menuItems = ROUTES.filter(menuItem => menuItem);
//   }
//   isMobileMenu() {
//       if ($(window).width() > 991) {
//           return false;
//       }
//       return true;
//   };
// }
