import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { RoleResponse } from '../../../models/rol-response.model';
import { RoleRequest } from '../../../models/rol-request.model';
import { RolService } from '../../../service/rol.service';
import { alert_error, alert_success, convertToBoolean } from 'src/app/functions/general.functions';

@Component({
  selector: 'app-mant-rol-register',
  templateUrl: './mant-rol-register.component.html',
  styleUrls: ['./mant-rol-register.component.scss']
})
export class MantRolRegisterComponent implements OnInit {
  
  
  
  @Input() title: string = '';
  @Input() rol: RoleResponse = new RoleResponse();
  @Input() accion: number = 0;

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;
  rolEnvio: RoleRequest = new RoleRequest(); 

  constructor(
    private fb: FormBuilder,
    private _rolService: RolService,
  )
  {
    this.myForm = this.fb.group({
    id: [{value: 0, disable: true},[Validators.required]],
    descripcion: [null,[Validators.required]],
    funcion: [null,[Validators.required]],
    });
  }
  
  ngOnInit(): void {



    console.log("title ==>", this.title);
    console.log("rol ==>", this.rol); 
    this.myForm.patchValue(this.rol);   

  }

  guardar(){
    this.rolEnvio = this.myForm.getRawValue();
    // this.rolEnvio."lo que sea booleano" = convertToBoolean(this.rolEnvio."lo que sea booleano".toString()); 

    switch(this.accion)
    {
      case AccionMantConst.crear:
        this.crearRegistro();
        break;
      case AccionMantConst.editar:
        this.editarRegistro();
        break;
      case AccionMantConst.eliminar:
        this.eliminarRegistro();
        break;
    }
    
  }


  crearRegistro()
  {
    this._rolService.create(this.rolEnvio).subscribe({
      next: (data:RoleResponse) => {
        alert_success("CREADO DE FORMA CORRECTA","")
      },
      error: () => {
        alert_error("OCURRIÓ UN ERROR","")
      },
      complete: () => {
        this.cerrarModal(true);
      },
    })
  }

  editarRegistro()
  {
    this._rolService.update(this.rolEnvio).subscribe({
      next: (data:RoleResponse) => {
        alert_success("ACTUALIZADO DE FORMA CORRECTA","")
      },
      error: () => {
        alert_error("OCURRIÓ UN ERROR","")
      },
      complete: () => {
        this.cerrarModal(true);
      },
    })
  }

  eliminarRegistro()
  {
    
  }

  cerrarModal(res:boolean)
  {
    this.closeModalEmmit.emit(res);
  }
}
