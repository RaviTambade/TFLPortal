import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/Components/home/home.component';
import { authRoutes } from './authentication/authentication.module';
import { employeeRoutes } from './employee/employee.module';
import { hrRoutes } from './hrmanager/hrmanager.module';
import { directorRoutes } from './director/director.module';
import { projectManagerRoutes } from './project-manager/project-manager.module';
import { HRRouteGaurd } from './hrmanager/Gaurds/gaurd';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', children: authRoutes },
  { path: 'employee', children: employeeRoutes },
  { path: 'hrmanager', children: hrRoutes, canActivateChild:[HRRouteGaurd()]  },
  { path: 'director', children: directorRoutes },
  { path: 'projectmanager', children: projectManagerRoutes },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
