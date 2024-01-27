import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-routing',
  templateUrl: './leave-routing.component.html',
  styleUrls: ['./leave-routing.component.css']
})
export class LeaveRoutingComponent {

  visible:boolean=false;

  onClick(){
    this.visible=true;
  }
}
