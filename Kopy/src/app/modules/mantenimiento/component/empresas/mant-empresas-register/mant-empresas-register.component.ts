import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success, convertToBoolean } from 'src/app/functions/general.functions';
import { EmpresaResponse } from '../../../models/empresas-response.module';
import { EmpresaRequest } from '../../../models/empresas-request.module';
import { EmpresasService } from '../../../service/empresas.service';
@Component({
  selector: 'app-mant-empresas-register',
  templateUrl: './mant-empresas-register.component.html',
  styleUrls: ['./mant-empresas-register.component.scss']
})
export class MantEmpresaRegisterComponent implements OnInit {
  
  
  
  @Input() title: string = '';
  @Input() empresa: EmpresaResponse = new EmpresaResponse();
  @Input() accion: number = 0;

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;
  empresaEnvio: EmpresaRequest = new EmpresaRequest(); 

  constructor(
    private fb: FormBuilder,
    private _empresaService: EmpresasService,
  )
  {
    this.myForm = this.fb.group({
    id: [{value: 0, disable: true},[Validators.required]],
    ruc: [null,[Validators.required]],
    razonSocial: [null,[Validators.required]],
    telefono: [null,[Validators.required]],
    contacto: [null,[Validators.required]],
    email: [null,[Validators.required]],
    });
  }
  
  ngOnInit(): void {



    console.log("title ==>", this.title);
    console.log("empresa ==>", this.empresa); 
    this.myForm.patchValue(this.empresa);   

  }

  guardar(){
    this.empresaEnvio = this.myForm.getRawValue();
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
    this._empresaService.create(this.empresaEnvio).subscribe({
      next: (data:EmpresaResponse) => {
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
    this._empresaService.update(this.empresaEnvio).subscribe({
      next: (data:EmpresaResponse) => {
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
