import { CanActivateFn } from '@angular/router';

export const onlyLoggedGuard: CanActivateFn = (route, state) => {
  return true;
};
