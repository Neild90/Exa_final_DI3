import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateLogin() {
    this.router.navigate(['/login']);
  }
}
