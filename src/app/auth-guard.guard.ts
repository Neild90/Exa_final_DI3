import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const codigoAlumno = sessionStorage.getItem('codigoAlumno');
   

  if (codigoAlumno) {
    return true; 
  } else {
    router.navigate(['/login']); 
    return false;
  }
  
};
