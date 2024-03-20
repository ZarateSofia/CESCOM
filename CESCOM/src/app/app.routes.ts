import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FAQComponent } from './cliente/faq/faq.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: '404', component: Error404Component},
    {path: 'register', component: RegisterComponent},
    {path: 'user', component: ClienteComponent, children:[
        {path: 'FAQ', component: FAQComponent},
        
    ]},
    {path:'**', redirectTo:'/404'}
];
