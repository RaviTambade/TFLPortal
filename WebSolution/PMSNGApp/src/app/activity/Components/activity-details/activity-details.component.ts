import { Component } from '@angular/core';
import { Activity } from '../../Models/Activity';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent {
activity:Activity|undefined;
 getEvent(event:Activity){
  this.activity=event;
 }

}
