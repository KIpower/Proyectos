import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent implements OnInit {
export class AppComponent {
  
  // usuario='admin';
  // password='123456';
  // nombreUsuario = 'Nombre Usuario';
  title = 'Kopy';

  // token:string ='';
  // rolRequest: RoleRequest = new RoleRequest();
  // roles:RoleRequest[]=[];

  // constructor(
  //   private _authService:AuthService,
  //   private _rolService:RolService
  // ){

  // }

  // ngOnInit(): void {
  //   console.log('EVENTO ON INIT');
    
  // }


  // iniciarSesion(){
  //   let loginRequest:any = {};
  //   console.log("usuario ->", this.usuario);
  //   console.log("password ->", this.password);

  //   loginRequest.userName = this.usuario;
  //   loginRequest.password = this.password;


  //   this._authService.login(loginRequest).subscribe(
  //   {
  //     next:(data: any) => {
  //       console.log('imprimiendo resultado login',data);
  //       this.token=data.token;
  //       this.listarRoles();
  //     },
  //     error:() => {},
  //     complete: () => {}
  //   }
  //   );
  // }

  // listarRoles(){
  //   this.roles = [];
  //   this._authService.roles(this.token).subscribe(
  //     {
  //       next:(data: any) => {
  //         console.log('imprimiendo roles',data);
  //         this.roles = data;
          
  //       },
  //       error:() => {
  //         console.log('No se puede obtener la lista de los roles');
          
  //       },
  //       complete: () => {}
  //     }
  //     );
  // }

  // crearRoles(){

  //   if(this.rolRequest.id == 0)
  //   {
  //     this._rolService.create(this.token, this.rolRequest).subscribe({
  //       next: ()=>{
  //         alert('CREADO');
  //         this.listarRoles();
  //       },
  //       error: ()=>{
  //         alert('Ocurrió un error');
  //       },
  //       complete: ()=>{}  
  //     }); 
  //   }
  //   else{
  //     this._rolService.update(this.token, this.rolRequest).subscribe({
  //       next: ()=>{
  //         alert('ACTUALIZADO');
  //         this.listarRoles();
  //       },
  //       error: ()=>{
  //         alert('Ocurrió un error');
  //       },
  //       complete: ()=>{}  
  //     }); 
  //   }
  // }

  // rellenarValores(rol: RoleRequest)
  // {
  //   this.rolRequest = rol;
  // }

  // eliminarRegistro(id:number)
  // {
  //   let eliminar = confirm('¿Está seguro que desea eliminar?');
  //   if (eliminar){
  //     this._rolService.delete(this.token, id).subscribe({
  //       next: ()=>{
  //         alert('ELIMINADO');
  //         this.listarRoles();
  //       },
  //       error: ()=>{
  //         alert('Ocurrió un error');
  //       },
  //       complete: ()=>{}  
  //     });

  //   }
  // }

}
