import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success, convertToBoolean } from 'src/app/functions/general.functions';
import { EstadoPedidoResponse } from '../../../models/ep-response.module';
import { EstadoPedidoRequest } from '../../../models/ep-request.module';
import { EpService } from '../../../service/ep.service';

@Component({
  selector: 'app-mant-ep-register',
  templateUrl: './mant-ep-register.component.html',
  styleUrls: ['./mant-ep-register.component.scss']
})
export class MantEpRegisterComponent implements OnInit {
  
  
  
  @Input() title: string = '';
  @Input() ep: EstadoPedidoResponse = new EstadoPedidoResponse();
  @Input() accion: number = 0;

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;
  epEnvio: EstadoPedidoRequest = new EstadoPedidoRequest(); 

  constructor(
    private fb: FormBuilder,
    private _epService: EpService,
  )
  {
    this.myForm = this.fb.group({
    id: [{value: 0, disable: true},[Validators.required]],
    descripcion: [null,[Validators.required]],
    campo: [null,[Validators.required]],
    });
  }
  
  ngOnInit(): void {



    console.log("title ==>", this.title);
    console.log("ep ==>", this.ep); 
    this.myForm.patchValue(this.ep);   

  }

  guardar(){
    this.epEnvio = this.myForm.getRawValue();
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
    this._epService.create(this.epEnvio).subscribe({
      next: (data:EstadoPedidoResponse) => {
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
    this._epService.update(this.epEnvio).subscribe({
      next: (data:EstadoPedidoResponse) => {
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
