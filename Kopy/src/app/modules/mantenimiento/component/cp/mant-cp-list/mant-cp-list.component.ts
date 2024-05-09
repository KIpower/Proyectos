import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success } from 'src/app/functions/general.functions';
import { GenericFilterRequest } from 'src/app/models/generic-filter-request.model';
import { GenericFilterResponse } from 'src/app/models/generic-filter-response.model';
import { ComprobantePagoResponse } from '../../../models/cp-response.module';
import { CpService } from '../../../service/cp.service';

@Component({
  selector: 'app-mant-cp-list',
  templateUrl: './mant-cp-list.component.html',
  styleUrls: ['./mant-cp-list.component.scss']
})
export class MantCpsListComponent {
  cps: ComprobantePagoResponse[] = [];
  modalRef?: BsModalRef;
  cpSelected: ComprobantePagoResponse = new ComprobantePagoResponse();
  titleModal:string="";
  accionModal:number=0;
  myFormFilter: FormGroup;
  totalItems:number = 0;
  itemsPerPage: number = 3;
  request: GenericFilterRequest= new GenericFilterRequest();
  

  constructor(
    private _route: Router,
    private fb: FormBuilder,
    private _cpService: CpService,
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

  listarCp(){
    this._cpService.getAll().subscribe({
      next:(data:ComprobantePagoResponse[])=>{
        this.cps = data;
        
      },
      error:(err)=>{
        alert_success("ERROR",err)
      },
      complete:()=>{},
    })
  }


  crearCp(template: TemplateRef<any>)
  {
    this.cpSelected = new ComprobantePagoResponse();
    this.titleModal= "NUEVO COMPROBANTE DE PAGO";
    this.accionModal = AccionMantConst.crear;
    this.openModal(template);
  }

  editarCp(template: TemplateRef<any>, cp:ComprobantePagoResponse)
  {
    this.cpSelected = cp;
    this.titleModal= "MODIFICAR COMPROBANTE DE PAGO";
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
      this.listarCp();
    }
  }

  eliminarRegistro(id: number)
  {
    let result = confirm("Está seguro de eliminar el registro?");  
    if(result)
    {
      this._cpService.delete(id).subscribe({
        next:(data:number) =>{
          alert_success("Registro eliminado de forma correcta","")
        },
        error:() =>{},
        complete:() =>{
          this.listarCp();
        },
      })
    }  
  }

  filtrar(){
    let valueForm = this.myFormFilter.getRawValue();
    console.log(this.myFormFilter.getRawValue());

    this.request.filtros.push({name:"descripcion", value:valueForm.descripcion});

    this._cpService.genericFilter(this.request).subscribe({
      next:(data: GenericFilterResponse<ComprobantePagoResponse>)=> {
        console.log(data);
        this.cps = data.lista;
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
