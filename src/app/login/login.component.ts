import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  codigoAlumno: string = '';
  password: string = '';

  // Lista de alumnos para validación
  alumnos = [
    { codigo: 'b1310398', nacimiento: '22091990' },
    // Agrega más alumnos según sea necesario
  ];

  constructor(private router: Router) {}

  login() {
    const alumno = this.alumnos.find(
      (a) => a.codigo === this.codigoAlumno && a.nacimiento === this.password
    );

    if (alumno) {
      sessionStorage.setItem('codigoAlumno', this.codigoAlumno);
      alert('Inicio de sesión exitoso.');
      this.router.navigate(['/main']);
    } else {
      alert('Código de alumno o contraseña incorrectos.');
    }
  }

}
