import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthServices } from './auth-services';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const authServices = inject(AuthServices)

  return authServices.isRoleAdmin()
};
