import { CanActivateFn } from '@angular/router';

export const onlyPublicGuard: CanActivateFn = (route, state) => {
  return true;
};
