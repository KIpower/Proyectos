import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success, convertToBoolean } from 'src/app/functions/general.functions';
import { ProductoResponse } from '../../../models/productos-response.module';
import { ProductoRequest } from '../../../models/productos-request.module';
import { ProductoService } from '../../../service/productos.service';

@Component({
  selector: 'app-mant-productos-register',
  templateUrl: './mant-productos-register.component.html',
  styleUrls: ['./mant-productos-register.component.scss']
})
export class MantProductosRegisterComponent implements OnInit {
  
  
  
  @Input() title: string = '';
  @Input() producto: ProductoResponse = new ProductoResponse();
  @Input() accion: number = 0;

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  myForm: FormGroup;
  productoEnvio: ProductoRequest = new ProductoRequest(); 
  productos: ProductoResponse[] = [];

  constructor(
    private fb: FormBuilder,
    private _productoService: ProductoService,
  )
  {
    this.myForm = this.fb.group({
    id: [{value: 0, disable: true},[Validators.required]],
    // idCategoria: [null,[Validators.required]],
    // idSubcategoria: [null,[Validators.required]],
    codigo: [null,[Validators.required]],
    calificacion: [null,[Validators.required]],
    nombre: [null,[Validators.required]],
    stock: [null,[Validators.required]],
    foto: [null,[Validators.required]],
    marca: [null,[Validators.required]],
    modelo: [null,[Validators.required]],
    precioCompra: [null,[Validators.required]],
    precioVenta: [null,[Validators.required]],
    descripcion: [null,[Validators.required]],
    estado: [null,[Validators.required]],
    });
  }
  
  ngOnInit(): void {



    console.log("title ==>", this.title);
    console.log("producto ==>", this.producto); 
    this.myForm.patchValue(this.producto);   

  }

  guardar(){
    this.productoEnvio = this.myForm.getRawValue();
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
    this._productoService.create(this.productoEnvio).subscribe({
      next: (data:ProductoResponse) => {
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
    this._productoService.update(this.productoEnvio).subscribe({
      next: (data:ProductoResponse) => {
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
