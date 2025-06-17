import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HistoryComponent } from './page/history/history.component';
import { ComponentNotFoundComponent } from './page/component-not-found/component-not-found.component';

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
        path:'',
        component:LayoutComponent,
        children:[        
            {
                path:"dashboard",
                component:DashboardComponent
            },
            {
                path:"history",
                component:HistoryComponent
            }
        ]
    },
    {
        path:"**",
        component:ComponentNotFoundComponent
    }

];
