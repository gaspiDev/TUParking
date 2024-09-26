import { CanActivateFn, Router, RedirectCommand } from '@angular/router';
import { DataAuthService } from '../services/data-auth.service';
import { inject } from '@angular/core';
import Swal from 'sweetalert2';

export const onlyLoggedGuard: CanActivateFn = (route, state) => {
  const authorization = inject(DataAuthService);
  if (authorization.usuario) return true;
  Swal.fire({
    icon: 'error',
    title: 'Acceso denegado',
    text: 'No estás autorizado para acceder a esta sección.',
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#d33'
  });
  return false;
};
