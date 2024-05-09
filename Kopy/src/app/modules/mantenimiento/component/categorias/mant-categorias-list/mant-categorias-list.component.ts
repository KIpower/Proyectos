import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success } from 'src/app/functions/general.functions';
import { GenericFilterRequest } from 'src/app/models/generic-filter-request.model';
import { GenericFilterResponse } from 'src/app/models/generic-filter-response.model';
import { CategoriaResponse } from '../../../models/categorias-response.module';
import { CategoriasService } from '../../../service/categorias.service';

@Component({
  selector: 'app-mant-categorias-list',
  templateUrl: './mant-categorias-list.component.html',
  styleUrls: ['./mant-categorias-list.component.scss']
})
export class MantCategoriasListComponent {
  categorias: CategoriaResponse[] = [];
  modalRef?: BsModalRef;
  categoriaSelected: CategoriaResponse = new CategoriaResponse();
  titleModal:string="";
  accionModal:number=0;
  myFormFilter: FormGroup;
  totalItems:number = 0;
  itemsPerPage: number = 3;
  request: GenericFilterRequest= new GenericFilterRequest();
  

  constructor(
    private _route: Router,
    private fb: FormBuilder,
    private _categoriaService: CategoriasService,
    private modalService: BsModalService
  )
  {
    this.myFormFilter = this.fb.group({
      descripcion: ["",[]],
      });
  }

  ngOnInit(): void {
    this.filtrar();
  }

  listarCategoria(){
    this._categoriaService.getAll().subscribe({
      next:(data:CategoriaResponse[])=>{
        this.categorias = data;
        
      },
      error:(err)=>{
        alert_success("ERROR",err)
      },
      complete:()=>{},
    })
  }


  crearCategoria(template: TemplateRef<any>)
  {
    this.categoriaSelected = new CategoriaResponse();
    this.titleModal= "NUEVA CATEGORIA";
    this.accionModal = AccionMantConst.crear;
    this.openModal(template);
  }

  editarCategoria(template: TemplateRef<any>, categoria:CategoriaResponse)
  {
    this.categoriaSelected = categoria;
    this.titleModal= "MODIFICAR CATEGORIA";
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
      this.listarCategoria();
    }
  }

  eliminarRegistro(id: number)
  {
    let result = confirm("Está seguro de eliminar el registro?");  
    if(result)
    {
      this._categoriaService.delete(id).subscribe({
        next:(data:number) =>{
          alert_success("Registro eliminado de forma correcta","")
        },
        error:() =>{},
        complete:() =>{
          this.listarCategoria();
        },
      })
    }  
  }

  filtrar(){
    let valueForm = this.myFormFilter.getRawValue();
    console.log(this.myFormFilter.getRawValue());

    this.request.filtros.push({name:"descripcion", value:valueForm.descripcion});

    this._categoriaService.genericFilter(this.request).subscribe({
      next:(data: GenericFilterResponse<CategoriaResponse>)=> {
        console.log(data);
        this.categorias = data.lista;
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
