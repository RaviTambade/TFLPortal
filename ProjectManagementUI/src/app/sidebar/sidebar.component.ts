import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'User profile',  icon:'pe-7s-user', class: '' },
    //{ path: '/table', title: 'Tables',  icon:'pe-7s-note2', class: '' },
    
    //{ path: '/login', title: 'login',  icon:'pe-7s-news-paper', class: '' },
    { path: '/register', title: 'Register',  icon:'pe-7s-science', class: '' },

    // { path: '/get-employees', title: 'All Employees',  icon:'pe-7s-study', class: '' },
    // { path: '/insert-employees', title: 'Add Employees',  icon:'pe-7s-study', class: '' },
    // { path: '/employeedetails', title: 'Employee Details',  icon:'pe-7s-study', class: '' },
    // { path: '/updateemployee', title: 'Update Employee',  icon:'pe-7s-study', class: '' },
   

    { path: '/getall-projects', title: 'Projects List',  icon:'pe-7s-study', class: '' },
    { path: '/insert-prject', title: 'Add Project',  icon:'pe-7s-study', class: '' },
    { path: '/projectdetails', title: 'Project Details',  icon:'pe-7s-study', class: '' },
    { path: '/updateproject', title: 'Update Employee',  icon:'pe-7s-study', class: '' },

   
    { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    {path : '/icons', title:'Icons', icon: 'pe-7s-look', class:''},
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
