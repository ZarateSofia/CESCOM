import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FAQComponent } from './cliente/faq/faq.component';
import { Error404Component } from './error404/error404.component';
import { OrdenesComponent } from './cliente/ordenes/ordenes.component';
import { RegistradorComponent } from './registrador/registrador.component';
import { ClientesComponent } from './registrador/clientes/clientes.component'
import { InventarioComponent } from './registrador/inventario/inventario.component'
import { ReparacionesComponent } from './registrador/reparaciones/reparaciones.component'
import { VentasComponent } from './registrador/ventas/ventas.component'

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: '404', component: Error404Component},
    {path: 'register', component: RegisterComponent},
    {path: 'user', component: ClienteComponent, children:[
        {path: 'FAQ', component: FAQComponent},
        {path: 'ordenes', component: OrdenesComponent}
        
    ]},
    {path: 'registrador', component: RegistradorComponent, children:[
        {path: 'clientes', component: ClientesComponent},
        {path: 'inventario', component: InventarioComponent},
        {path: 'reparaciones', component: ReparacionesComponent},
        {path: 'ventas', component: VentasComponent},
    ]},

    {path:'**', redirectTo:'/404'}
];
