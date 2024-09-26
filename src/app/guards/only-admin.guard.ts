import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataAuthService } from '../services/data-auth.service';
import Swal from 'sweetalert2';

export const onlyAdminGuard: CanActivateFn = (route, state) => {
  const authorization = inject(DataAuthService);
  if(authorization.usuario?.isAdmin) return true;
  Swal.fire({
    icon: 'error',
    title: 'Acceso denegado',
    text: 'No estás autorizado para acceder a esta sección.',
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#d33'
  });
  return false;
};