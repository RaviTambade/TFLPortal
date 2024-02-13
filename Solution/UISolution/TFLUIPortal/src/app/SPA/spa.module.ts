import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SPAContainer } from './spa-container/spa-container';
import { ProjectManagerContainer } from '../ProjectManager/components/container/projectmanager-container';
import { projectManagerRoutes } from '../ProjectManager/project-manager.module';
import { HRManagerContainer } from '../HRManager/components/container/hrmanager-container';
import { hrRoutes } from '../HRManager/hrmanager.module';
import { Login } from '../authentication/Components/login/login';

const routes: Routes = [
  { path: 'prjmanagers', component: ProjectManagerContainer, children:projectManagerRoutes},
  { path: 'hrmanagers',loadChildren : ()=> import('../HRManager/hrmanager.module').then(m=>m.HRManagerModule)},
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