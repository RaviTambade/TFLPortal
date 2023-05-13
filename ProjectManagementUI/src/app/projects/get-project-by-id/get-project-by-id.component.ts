import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Projects } from '../Projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-get-project-by-id',
  templateUrl: './get-project-by-id.component.html',
  styleUrls: ['./get-project-by-id.component.scss']
})
export class GetProjectByIdComponent implements OnInit {

  @Input() projId : number | undefined;
  project : Projects | any;
  projectId:any|undefined;
  status:boolean|undefined;

  @Output() sendProject = new EventEmitter;
  router: any;

  constructor(private svc : ProjectsService ) { }

  ngOnInit(): void {
    if(this.projId !=undefined)
    this.svc.getProjectById(this.projId).subscribe((response)=>{
      this.project=response;
      // this.project.planedStartDate=this.datepipe.transform(this.project.planedStartDate,'yyyy-MM-dd hh.mm.ss');
      // this.project.planedEndDate=this.datepipe.transform(this.project.planedEndDate,'yyyy-MM-dd hh.mm.ss');
      // this.project.actualStartDate=this.datepipe.transform(this.project.actualStartDate,'yyyy-MM-dd hh.mm.ss');
      // this.project.actualEndDate=this.datepipe.transform(this.project.actualEndDate,'yyyy-MM-dd hh.mm.ss');
      // console.log(this.project.planedStartDate);
      // console.log(this.project.planedEndDate);
      // console.log(this.project.actualStartDate);
      // console.log(this.project.actualEndDate);
      console.log(response);
      this.sendProject.emit({project:this.project});
    })
    
  }

  getProject(id:any){
  // if(this.project==this.projId){
    this.svc.getProjectById(id).subscribe((response) =>{
      this.project = response;
      // this.project.planedStartDate=this.datepipe.transform(this.project.planedStartDate,'yyyy-MM-dd hh.mm.ss');
      // this.project.planedEndDate=this.datepipe.transform(this.project.planedEndDate,'yyyy-MM-dd hh.mm.ss');
      // this.project.actualStartDate=this.datepipe.transform(this.project.actualStartDate,'yyyy-MM-dd hh.mm.ss');
      // this.project.actualEndDate=this.datepipe.transform(this.project.actualEndDate,'yyyy-MM-dd hh.mm.ss');
      // console.log(this.project.planedStartDate);
      // console.log(this.project.planedEndDate);
      // console.log(this.project.actualStartDate);
      // console.log(this.project.actualEndDate);
      console.log(response);
      this.sendProject.emit({project:this.project});  
    })

  // }else{
  //   alert("Account not Fount");
  // }
    
  }

  update(){
    this.svc.update(this.project).subscribe(
      (response)=>{
        this.status=response;
        console.log(response);
      }
    )
  };

  onUpdateClick(employeeId:any) {
    this.router.navigate(['Project/Emp-update',employeeId]);
    }


  delete(){
    console.log(this.project.projectId);
    this.svc.delete(this.project.projectId).subscribe(
      (data)=>{
        this.status=data;
        if(data){
          alert("Account Deleted Successfully");
        }
        else{
          {alert("Error")}
        }
        console.log(data);
      }
    )

  }



  receiveProject($event:any){
    this.project=$event.project;
  }


}
