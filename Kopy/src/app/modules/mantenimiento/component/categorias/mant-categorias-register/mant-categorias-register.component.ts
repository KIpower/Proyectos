import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success, convertToBoolean } from 'src/app/functions/general.functions';
import { CategoriaResponse } from '../../../models/categorias-response.module';
import { CategoriaRequest } from '../../../models/categorias-request.module';
import { CategoriasService } from '../../../service/categorias.service';

@Component({
  selector: 'app-mant-categorias-register',
  templateUrl: './mant-categorias-register.component.html',
  styleUrls: ['./mant-categorias-register.component.scss']
})
export class MantCategoriasRegisterComponent implements OnInit {
  
  
  
  @Input() title: string = '';
  @Input() categoria: CategoriaResponse = new CategoriaResponse();
  @Input() accion: number = 0;

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;
  categoriaEnvio: CategoriaRequest = new CategoriaRequest(); 

  constructor(
    private fb: FormBuilder,
    private _categoriaService: CategoriasService,
  )
  {
    this.myForm = this.fb.group({
    id: [{value: 0, disable: true},[Validators.required]],
    descripcion: [null,[Validators.required]],
    });
  }
  
  ngOnInit(): void {



    console.log("title ==>", this.title);
    console.log("categoria ==>", this.categoria); 
    this.myForm.patchValue(this.categoria);   

  }

  guardar(){
    this.categoriaEnvio = this.myForm.getRawValue();
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
    this._categoriaService.create(this.categoriaEnvio).subscribe({
      next: (data:CategoriaResponse) => {
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
    this._categoriaService.update(this.categoriaEnvio).subscribe({
      next: (data:CategoriaResponse) => {
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
