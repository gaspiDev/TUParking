import { CanActivateFn, Router } from '@angular/router';
import { DataAuthService } from '../services/data-auth.service';
import { inject } from '@angular/core';
import { ModalsServicesService } from '../services/modals-services.service';

export const onlyLoggedGuard: CanActivateFn = (route, state) => {
  const modal = inject(ModalsServicesService);
  const authorization = inject(DataAuthService);
  const router = inject(Router)
  if (authorization.usuario) return true;
  modal.modalAccesDenied().then(() => {
    router.navigate(['landing']);
  });;
  return false;
};
