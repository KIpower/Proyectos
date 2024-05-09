import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success } from 'src/app/functions/general.functions';
import { GenericFilterRequest } from 'src/app/models/generic-filter-request.model';
import { GenericFilterResponse } from 'src/app/models/generic-filter-response.model';
import { EstadoPedidoResponse } from '../../../models/ep-response.module';
import { EpService } from '../../../service/ep.service';

@Component({
  selector: 'app-mant-ep-list',
  templateUrl: './mant-ep-list.component.html',
  styleUrls: ['./mant-ep-list.component.scss']
})
export class MantEpListComponent {
  eps: EstadoPedidoResponse[] = [];
  modalRef?: BsModalRef;
  epSelected: EstadoPedidoResponse = new EstadoPedidoResponse();
  titleModal:string="";
  accionModal:number=0;
  myFormFilter: FormGroup;
  totalItems:number = 0;
  itemsPerPage: number = 3;
  request: GenericFilterRequest= new GenericFilterRequest();
  

  constructor(
    private _route: Router,
    private fb: FormBuilder,
    private _epService: EpService,
    private modalService: BsModalService
  )
  {
    this.myFormFilter = this.fb.group({
      descripcion: ["",[]],
      campo: ["",[]],
      });
  }

  ngOnInit(): void {
    this.filtrar();
  }

  listarEp(){
    this._epService.getAll().subscribe({
      next:(data:EstadoPedidoResponse[])=>{
        this.eps = data;
        
      },
      error:(err)=>{
        alert_success("ERROR",err)
      },
      complete:()=>{},
    })
  }


  crearEp(template: TemplateRef<any>)
  {
    this.epSelected = new EstadoPedidoResponse();
    this.titleModal= "NUEVO ESTADO PEDIDO";
    this.accionModal = AccionMantConst.crear;
    this.openModal(template);
  }

  editarEp(template: TemplateRef<any>, ep:EstadoPedidoResponse)
  {
    this.epSelected = ep;
    this.titleModal= "MODIFICAR ESTADO PEDIDO";
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
      this.listarEp();
    }
  }

  eliminarRegistro(id: number)
  {
    let result = confirm("Está seguro de eliminar el registro?");  
    if(result)
    {
      this._epService.delete(id).subscribe({
        next:(data:number) =>{
          alert_success("Registro eliminado de forma correcta","")
        },
        error:() =>{},
        complete:() =>{
          this.listarEp();
        },
      })
    }  
  }

  filtrar(){
    let valueForm = this.myFormFilter.getRawValue();
    console.log(this.myFormFilter.getRawValue());

    this.request.filtros.push({name:"descripcion", value:valueForm.descripcion});
    this.request.filtros.push({name:"campo", value:valueForm.campo});

    this._epService.genericFilter(this.request).subscribe({
      next:(data: GenericFilterResponse<EstadoPedidoResponse>)=> {
        console.log(data);
        this.eps = data.lista;
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
