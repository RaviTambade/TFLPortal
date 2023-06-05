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
import { InsertPrjectComponent } from 'app/projects/insert-prject/insert-prject.component';
import { EmployeedetailsComponent } from 'app/hrmodule/employeedetails/employeedetails.component';
import { UpdateemployeeComponent } from 'app/hrmodule/updateemployee/updateemployee.component';
import { ProjectdetailsComponent } from 'app/projects/projectdetails/projectdetails.component';
import { UpdateprojectComponent } from 'app/projects/updateproject/updateproject.component';
import { AccountlistComponent } from 'app/account/accountlist/accountlist.component';
import { AddaccountComponent } from 'app/account/addaccount/addaccount.component';
import { AccountdetailsComponent } from 'app/account/accountdetails/accountdetails.component';
import { UpdateaccountComponent } from 'app/account/updateaccount/updateaccount.component';
import { InsertTaskComponent } from 'app/task/insert-task/insert-task.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',           component: HomeComponent },
    { path: 'user',                component: UserComponent },
    { path: 'login',               component: LoginComponent },
    { path: 'register',            component: RegisterComponent },

    { path: 'get-employees',       component: GetEmployeesComponent },
    { path: 'insert-employees',    component: InsertEmployeeComponent},
    { path: 'employeedetails',     component: EmployeedetailsComponent},
    { path: 'updateemployee',      component: UpdateemployeeComponent},
   


    { path: 'getall-projects',     component: GetallProjectsComponent },
    { path: 'insert-prject',       component: InsertPrjectComponent  },
    { path: 'projectdetails',      component: ProjectdetailsComponent},
    { path: 'updateproject',       component: UpdateprojectComponent},

    { path: 'accountlist',        component: AccountlistComponent},
    { path: 'addaccount',         component: AddaccountComponent},
    { path: 'accountdetails',     component: AccountdetailsComponent},
    { path: 'updateaccount',      component: UpdateaccountComponent},


    { path: 'insert-task',      component: InsertTaskComponent},
    
    { path: 'maps',                component: MapsComponent },
    { path: 'notifications',       component: NotificationsComponent },
    { path: 'icons',               component: IconsComponent },
    { path: 'upgrade',             component: UpgradeComponent },
];
