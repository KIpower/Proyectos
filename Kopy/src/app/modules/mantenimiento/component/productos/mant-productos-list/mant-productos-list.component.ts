import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success } from 'src/app/functions/general.functions';
import { GenericFilterRequest } from 'src/app/models/generic-filter-request.model';
import { GenericFilterResponse } from 'src/app/models/generic-filter-response.model';
import { ProductoResponse } from '../../../models/productos-response.module';
import { ProductoService } from '../../../service/productos.service';

@Component({
  selector: 'app-mant-productos-list',
  templateUrl: './mant-productos-list.component.html',
  styleUrls: ['./mant-productos-list.component.scss']
})
export class MantProductosListComponent {
  productos: ProductoResponse[] = [];
  modalRef?: BsModalRef;
  productoSelected: ProductoResponse = new ProductoResponse();
  titleModal:string="";
  accionModal:number=0;
  myFormFilter: FormGroup;
  totalItems:number = 0;
  itemsPerPage: number = 3;
  request: GenericFilterRequest= new GenericFilterRequest();
  

  constructor(
    private _route: Router,
    private fb: FormBuilder,
    private _productoService: ProductoService,
    private modalService: BsModalService
  )
  {
    this.myFormFilter = this.fb.group({
      codigo: ["",[]],
      calificacion: ["",[]],
      nombre: ["",[]],
      stock: ["",[]],
      marca: ["",[]],
      modelo: ["",[]],
      precioCompra: ["",[]],
      precioVenta: ["",[]],
      descripcion: ["",[]],
      });
  }

  ngOnInit(): void {
    this.filtrar();
  }

  listarProducto(){
    this._productoService.getAll().subscribe({
      next:(data:ProductoResponse[])=>{
        this.productos = data;
        
      },
      error:(err)=>{
        alert_success("ERROR",err)
      },
      complete:()=>{},
    })
  }


  crearProducto(template: TemplateRef<any>)
  {
    this.productoSelected= new ProductoResponse();
    this.titleModal= "NUEVO PRODUCTO";
    this.accionModal = AccionMantConst.crear;
    this.openModal(template);
  }

  editarProducto(template: TemplateRef<any>, producto:ProductoResponse)
  {
    this.productoSelected = producto;
    this.titleModal= "MODIFICAR PRODUCTO";
    this.accionModal = AccionMantConst.editar;
    this.openModal(template);
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getCloseModalEmmit(res: boolean)
  {
    this.modalRef?.hide();
    if(res)
    {
      this.listarProducto();
    }
  }

  eliminarRegistro(id: number)
  {
    let result = confirm("Está seguro de eliminar el registro?");  
    if(result)
    {
      this._productoService.delete(id).subscribe({
        next:(data:number) =>{
          alert_success("Registro eliminado de forma correcta","")
        },
        error:() =>{},
        complete:() =>{
          this.listarProducto();
        },
      })
    }  
  }

  filtrar(){
    let valueForm = this.myFormFilter.getRawValue();
    console.log(this.myFormFilter.getRawValue());

    this.request.filtros.push({name:"codigo", value:valueForm.codigo});
    this.request.filtros.push({name:"calificacion", value:valueForm.calificacion});
    this.request.filtros.push({name:"nombre", value:valueForm.nombre});
    this.request.filtros.push({name:"stock", value:valueForm.stock});
    this.request.filtros.push({name:"marca", value:valueForm.marca});
    this.request.filtros.push({name:"modelo", value:valueForm.modelo});
    this.request.filtros.push({name:"precioCompra", value:valueForm.precioCompra});
    this.request.filtros.push({name:"precioVenta", value:valueForm.precioVenta});
    this.request.filtros.push({name:"descripcion", value:valueForm.descripcion});

    this._productoService.genericFilter(this.request).subscribe({
      next:(data: GenericFilterResponse<ProductoResponse>)=> {
        console.log(data);
        this.productos = data.lista;
        this.totalItems = data.totalRegistros;
      },
      error:()=> {
        alert_error("ERROR","")
      },
      complete:()=> {
        console.log("COMPLETO",);
      },
    })
  }

  changePage(event: PageChangedEvent)
  {
    this.request.numeroPagina = event.page;
    this.filtrar();
  }

  changeItemsPerPage() {
    this.request.cantidad = this.itemsPerPage;
    this.filtrar();
  }
}
