import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectplanningService } from '../../Services/projectplanning.service';
import { userstory } from '../../Models/userstory';

@Component({
  selector: 'userstoriesList',
  templateUrl: './project-user-stories.component.html',
  styleUrls: ['./project-user-stories.component.css']
})
export class ProjectUserStoriesComponent implements OnInit{
constructor(private service :ProjectplanningService){}

@Output()  userStory=new EventEmitter<userstory>();
projectId:number=1;
userstories:userstory[]=[];
  ngOnInit(): void {
   this.service.getAllUserStories(this.projectId).subscribe((res)=>{
    this.userstories=res;
    this.userStory.emit(this.userstories[0]);
   console.log(this.userstories[0]);
  })}


  onClickUserStory(userstory:userstory){
    this.userStory.emit(userstory);
  }
}
