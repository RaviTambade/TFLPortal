import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { userstory } from '../../Models/userstory';

@Component({
  selector: 'app-user-story-details',
  templateUrl: './user-story-details.component.html',
  styleUrls: ['./user-story-details.component.css']
})
export class UserStoryDetailsComponent  {
   userstories:userstory|undefined;
 
 

  onReciveEvent(event:userstory){
     
    this.userstories=event;
  }

}
