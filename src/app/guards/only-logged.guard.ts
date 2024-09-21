import { CanActivateFn } from '@angular/router';
import { DataAuthService } from '../services/data-auth.service';
import { inject } from '@angular/core';

export const onlyLoggedGuard: CanActivateFn = (route, state) => {
  const authorization = inject(DataAuthService);
  return authorization.usuario ? true : false;
};
