import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
})
export class LeftSidebarComponent {
  projectLink: any[]=[{url:'projectMembers',name:'Members'},{url :"Add project",name :'newproject'}]

}
