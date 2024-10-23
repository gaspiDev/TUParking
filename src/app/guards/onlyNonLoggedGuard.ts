import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataAuthService } from '../services/data-auth.service';
import { ModalsServicesService } from '../services/modals-services.service';

export const onlyNonLoggedGuard: CanActivateFn = (route, state) => {
  const modal = inject(ModalsServicesService);
  const authorization = inject(DataAuthService);
  const router = inject(Router)
  if (!authorization.usuario) return true;
  modal.modalAccesDenied().then(() => {
    router.navigate(['app/parking-state']);
  });;
  return false;
};