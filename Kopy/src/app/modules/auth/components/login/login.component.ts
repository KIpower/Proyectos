import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/login-request.model';
import { AuthService } from '../../service/auth.service';
import { LoginResponse } from 'src/app/models/login-response.model';
import { Router } from '@angular/router';
import { alert_success } from 'src/app/functions/general.functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:FormGroup;
  loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  )
  {
    this.loginForm = this.fb.group({
      username: [null,[Validators.required]],
      password: [null,[Validators.required]],
    })
  }

  login()
  {
    console.log(this.loginForm.getRawValue());
    this.loginRequest = this.loginForm.getRawValue();

    this._authService.login(this.loginRequest).subscribe({
      next:(data:LoginResponse)=> {
        console.log(data);
        alert_success("LOGIN CORRECTO","Revise las novedades");
        this._router.navigate(['template/mantenimiento/rol']);

        if (data.success) 
        {
          sessionStorage.setItem("token",data.token);
          sessionStorage.setItem("idUsuario",data.usuario.id.toString());
          sessionStorage.setItem("username",data.usuario.username);
          sessionStorage.setItem("name",data.cliente.nombre);
          sessionStorage.setItem("rolId",data.role.id.toString());
        }
        else
        {
          return;
        }
      },
      error:(err) => {},
      complete:() => {},
    })
  }
}
