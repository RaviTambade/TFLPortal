import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from '../authentication/Components/login/login';
import { SPAContainer } from './spa-container/spa-container';

const routes: Routes = [
  { path: 'prjmanagers', loadChildren:()=> import('../projectmanager/project-manager.module').then(m=>m.ProjectManagerModule)},
  { path: 'hrmanagers',loadChildren : ()=> import('../hrmanager/hrmanager.module').then(m=>m.HRManagerModule)},
  { path:'directors', loadChildren : () => import('../director/director.module').then(m=>m.DirectorModule)},
  { path: 'employees', loadChildren : () => import('../employee/employee.module').then(m=>m.EmployeeModule)},
  { path: 'login', component: Login },
 ];
 
@NgModule({
  declarations:[SPAContainer],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,SPAContainer],
})
export class SPAModule {}