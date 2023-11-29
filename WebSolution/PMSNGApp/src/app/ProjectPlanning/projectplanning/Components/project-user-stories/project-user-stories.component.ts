import { Component, OnInit } from '@angular/core';
import { ProjectplanningService } from '../../Services/projectplanning.service';
import { userstories } from '../../Models/userstories';

@Component({
  selector: 'userstoriesList',
  templateUrl: './project-user-stories.component.html',
  styleUrls: ['./project-user-stories.component.css']
})
export class ProjectUserStoriesComponent implements OnInit{
constructor(private service :ProjectplanningService){}
projectId:number=1;
  ngOnInit(): void {
   this.getAllUserStories(this.projectId); 
  }

userstory:userstories[]=[];


getAllUserStories(projectId:number){
  this.service.getAllUserStories(projectId).subscribe((res)=>{
    this.userstory=res;

  })

}
}
