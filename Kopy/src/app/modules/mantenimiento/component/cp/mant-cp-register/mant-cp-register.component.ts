import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success, convertToBoolean } from 'src/app/functions/general.functions';
import { ComprobantePagoResponse } from '../../../models/cp-response.module';
import { ComprobantePagoRequest } from '../../../models/cp-request.module';
import { CpService } from '../../../service/cp.service';

@Component({
  selector: 'app-mant-cp-register',
  templateUrl: './mant-cp-register.component.html',
  styleUrls: ['./mant-cp-register.component.scss']
})
export class MantCpRegisterComponent implements OnInit {
  
  
  
  @Input() title: string = '';
  @Input() cp: ComprobantePagoResponse = new ComprobantePagoResponse();
  @Input() accion: number = 0;

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;
  cpEnvio: ComprobantePagoRequest = new ComprobantePagoRequest(); 

  constructor(
    private fb: FormBuilder,
    private _cpService: CpService,
  )
  {
    this.myForm = this.fb.group({
    id: [{value: 0, disable: true},[Validators.required]],
    descripcion: [null,[Validators.required]],
    });
  }
  
  ngOnInit(): void {



    console.log("title ==>", this.title);
    console.log("comprobantePago ==>", this.cp); 
    this.myForm.patchValue(this.cp);   

  }

  guardar(){
    this.cpEnvio = this.myForm.getRawValue();
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
    this._cpService.create(this.cpEnvio).subscribe({
      next: (data:ComprobantePagoResponse) => {
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
    this._cpService.update(this.cpEnvio).subscribe({
      next: (data:ComprobantePagoResponse) => {
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
