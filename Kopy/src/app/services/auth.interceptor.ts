import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { alert_error } from '../functions/general.functions';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {





    let token = sessionStorage.getItem("token");

    let request = req;

    if (token) {
      request = req.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          } 
        });
    }

    return next.handle(request).pipe(

      catchError(
        (err: HttpErrorResponse) =>{

        let error = err.error; 

        switch(err.status)
        {
          case 400:
            alert_error("ERROR DE BAD REQUEST", "DATOS ENVIADOS INCORRECTOS");
             break;
          case 401:
            alert_error("SU SESIÓN HA CADUCADO", "VUELVA A REALIZAR EL LOGIN");
            this.router.navigate(['']);
             break;
          case 404:
            alert_error("RECURSOS NO ENCONTRADOS","");
             break;
          case 403:
            alert_error("PERMISOS INSUFICIENTES","COORDINE CON SU ADMINISTRADOR");
             break;
          case 500:
            alert_error("OCURRIÓ UN ERROR","INTÉNTELO MÁS TARDE");
            break;
          case 0:
            alert_error("OCURRIÓ UN ERROR","NO PODEMOS COMUNICARNOS CON EL SERVICIO");
             break;
          default:
            alert_error("","");
            break;
        }

        return throwError(() => {err});
      })

    );
  }
}
