import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { IsLogin } from '../services/is-login';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const isLogin = inject(IsLogin);
  return isLogin.getUserRole()==='admin' ;
};
