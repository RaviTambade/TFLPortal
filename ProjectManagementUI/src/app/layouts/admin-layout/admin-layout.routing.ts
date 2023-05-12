import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { IconsComponent } from 'app/icons/icons.component';
import { GetEmployeesComponent } from 'app/hrmodule/get-employees/get-employees.component';
import { InsertEmployeeComponent } from 'app/hrmodule/insert-employee/insert-employee.component';
import { GetallProjectsComponent } from 'app/projects/getall-projects/getall-projects.component';
import { GetProjectByIdComponent } from 'app/projects/get-project-by-id/get-project-by-id.component'; 

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',           component: HomeComponent },
    { path: 'user',                component: UserComponent },
    //{ path: 'table',             component: TablesComponent },
    { path: 'login',               component: LoginComponent },
    { path: 'register',            component: RegisterComponent },

    { path: 'get-employees',       component: GetEmployeesComponent },
    { path: 'insert-employees',    component: InsertEmployeeComponent},


    { path: 'getall-projects',      component: GetallProjectsComponent },
    { path: 'get-project-by-id',   component: GetProjectByIdComponent},

    
    { path: 'maps',                component: MapsComponent },
    { path: 'notifications',       component: NotificationsComponent },
    { path: 'icons',               component: IconsComponent },
    { path: 'upgrade',             component: UpgradeComponent },
];
