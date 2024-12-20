import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [MaterialModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  codigoAlumno: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const codigoAlumno = sessionStorage.getItem('codigoAlumno');
    if (!codigoAlumno) {
      this.router.navigate(['/login']);
    } else {
      this.codigoAlumno = sessionStorage.getItem('codigoAlumno');
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}
