import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { DataAuthService } from '../services/data-auth.service';

export const onlyAdminGuard: CanActivateFn = (route, state) => {
  const authorization = inject(DataAuthService);
  return authorization.usuario?.isAdmin ? true : false;
};