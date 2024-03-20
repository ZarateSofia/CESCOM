import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterLinkActive, RouterLink, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
