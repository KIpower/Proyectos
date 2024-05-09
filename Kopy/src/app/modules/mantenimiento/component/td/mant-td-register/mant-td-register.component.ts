import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoDocumentoResponse } from '../../../models/td-response.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoDocumentoRequest } from '../../../models/td-request.module';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success } from 'src/app/functions/general.functions';
import { TdService } from '../../../service/td.service';

@Component({
  selector: 'app-mant-td-register',
  templateUrl: './mant-td-register.component.html',
  styleUrls: ['./mant-td-register.component.scss']
})
export class MantTdRegisterComponent implements OnInit {
  
  @Input() title: string = '';
  @Input() td: TipoDocumentoResponse = new TipoDocumentoResponse();
  @Input() accion: number = 0;

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;
  tdEnvio: TipoDocumentoRequest = new TipoDocumentoRequest(); 

  constructor(
    private fb: FormBuilder,
    private _tdService: TdService,
  )
  {
    this.myForm = this.fb.group({
    id: [{value: 0, disable: true},[Validators.required]],
    descripcion: [null,[Validators.required]],
    });
  }
  
  ngOnInit(): void {



    console.log("title ==>", this.title);
    console.log("td ==>", this.td); 
    this.myForm.patchValue(this.td);   

  }

  guardar(){
    this.tdEnvio = this.myForm.getRawValue();
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
    this._tdService.create(this.tdEnvio).subscribe({
      next: (data:TipoDocumentoResponse) => {
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
    this._tdService.update(this.tdEnvio).subscribe({
      next: (data:TipoDocumentoResponse) => {
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

