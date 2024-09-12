import { CanActivateFn } from '@angular/router';

export const onlyAdminGuard: CanActivateFn = (route, state) => {
  return true;
};
