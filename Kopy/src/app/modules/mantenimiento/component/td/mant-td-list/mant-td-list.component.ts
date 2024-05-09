import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success } from 'src/app/functions/general.functions';
import { GenericFilterRequest } from 'src/app/models/generic-filter-request.model';
import { GenericFilterResponse } from 'src/app/models/generic-filter-response.model';
import { TipoDocumentoResponse } from '../../../models/td-response.module';
import { TdService } from '../../../service/td.service';

@Component({
  selector: 'app-mant-td-list',
  templateUrl: './mant-td-list.component.html',
  styleUrls: ['./mant-td-list.component.scss']
})
export class MantTdListComponent {
  tds: TipoDocumentoResponse[] = [];
  modalRef?: BsModalRef;
  tdSelected: TipoDocumentoResponse = new TipoDocumentoResponse();
  titleModal:string="";
  accionModal:number=0;
  myFormFilter: FormGroup;
  totalItems:number = 0;
  itemsPerPage: number = 3;
  request: GenericFilterRequest= new GenericFilterRequest();
  

  constructor(
    private _route: Router,
    private fb: FormBuilder,
    private _tdService: TdService,
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

  listarTd(){
    this._tdService.getAll().subscribe({
      next:(data:TipoDocumentoResponse[])=>{
        this.tds = data;
        
      },
      error:(err)=>{
        alert_success("ERROR",err)
      },
      complete:()=>{},
    })
  }


  crearTd(template: TemplateRef<any>)
  {
    this.tdSelected = new TipoDocumentoResponse();
    this.titleModal= "NUEVO TIPO DE DOCUMENTO";
    this.accionModal = AccionMantConst.crear;
    this.openModal(template);
  }

  editarTd(template: TemplateRef<any>, td:TipoDocumentoResponse)
  {
    this.tdSelected = td;
    this.titleModal= "MODIFICAR TIPO DE DOCUMENTO";
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
      this.listarTd();
    }
  }

  eliminarRegistro(id: number)
  {
    let result = confirm("Está seguro de eliminar el registro?");  
    if(result)
    {
      this._tdService.delete(id).subscribe({
        next:(data:number) =>{
          alert_success("Registro eliminado de forma correcta","")
        },
        error:() =>{},
        complete:() =>{
          this.listarTd();
        },
      })
    }  
  }

  filtrar(){
    let valueForm = this.myFormFilter.getRawValue();
    console.log(this.myFormFilter.getRawValue());

    this.request.filtros.push({name:"descripcion", value:valueForm.descripcion});

    this._tdService.genericFilter(this.request).subscribe({
      next:(data: GenericFilterResponse<TipoDocumentoResponse>)=> {
        console.log(data);
        this.tds = data.lista;
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
