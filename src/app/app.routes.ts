import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch:'full'
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:"dashboard",
                component:DashboardComponent
            }
        ]
    }

];
