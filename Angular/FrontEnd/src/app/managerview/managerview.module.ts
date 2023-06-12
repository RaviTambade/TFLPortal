import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { UpdateComponent } from './projects/update/update.component';
import { DetailComponent } from './projects/detail/detail.component';
import { RouterContainerComponent } from './router-container/router-container.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './projects/add/add.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';


const routes : Routes=
[
  {path: '' , redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
   
  {path: 'projectlist', component : ProjectListComponent},
  {path: 'detail', component : DetailComponent},
  {path: 'add', component : AddComponent},
  {path: 'update', component : UpdateComponent},
  
  {path: 'employeelist',component:EmployeeListComponent}
];


@NgModule({
  declarations: [
    ProjectListComponent,
    UpdateComponent,
    DetailComponent,
    RouterContainerComponent,
    SignInComponent,
    AddComponent,
    EmployeeListComponent,
    HomeComponent
  ],
  exports:[RouterContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ManagerviewModule { }
