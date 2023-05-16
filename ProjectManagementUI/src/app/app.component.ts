import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projects  = [
    { name: 'Online coading',          id: '1', stddate:'2021/02/10',enddate:'2021/04/10', description:'Online coading on project',empId:1},
    { name: 'Online testing',          id: '2', stddate:'2021/05/11',enddate:'2021/06/10', description:'Online testing on project',empId:3},
    { name: ' Arrange Online Meeting', id: '3', stddate:'2022/01/10',enddate:'2022/04/10', description:'Online coading on project',empId:2},
    { name: 'Audit Processing',        id: '4', stddate:'2020/04/10',enddate:'2020/06/10', description:'Online coading on project',empId:2},
    { name: 'Quality Inspection',      id: '5', stddate:'2020/05/10',enddate:'2020/07/10', description:'Online coading on project',empId:1},
  ];

     constructor(public location: Location) {}
    ngOnInit(){
    }

    isMap(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
        return false;
      }
      else {
        return true;
      }
    }
}
