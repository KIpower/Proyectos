import { CanActivateFn } from '@angular/router';
import { alert_error } from '../functions/general.functions';

export const authGuard: CanActivateFn = (route, state) => {

  let token = sessionStorage.getItem("token");

  if (!token) 
  {
    return true;
  }

  return true;
};
