import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'register', component: RegisterComponent},
    {path:'**', redirectTo:''}
];
