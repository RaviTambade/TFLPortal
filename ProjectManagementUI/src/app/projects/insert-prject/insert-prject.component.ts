import { Component} from '@angular/core';
import { Projects } from '../Projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-insert-prject',
  templateUrl: './insert-prject.component.html',
  styleUrls: ['./insert-prject.component.scss']
})
export class InsertPrjectComponent {
 
  project : Projects = {
    
    projId : 0,
    projName: '',
    startDate: '',
    endDate: '',
    description: '',
    teamId:0
  };

  status : boolean |undefined;



  constructor(private svc : ProjectsService) { }

  insertProject(form:any){
    this.svc.insert(form).subscribe(
      (response)=>{
      this.status=response;
      console.log(response);
      if(response){

        alert("Account Inserted successfully");
        
        window.location.reload();
        
        }
        
        else{
        
        alert("error")
        
       }
    },(error)=>{
      this.status=false;
    }
    )
  }

   

}
