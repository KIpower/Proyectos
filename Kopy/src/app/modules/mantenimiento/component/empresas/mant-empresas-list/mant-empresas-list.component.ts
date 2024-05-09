import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { alert_error, alert_success } from 'src/app/functions/general.functions';
import { GenericFilterRequest } from 'src/app/models/generic-filter-request.model';
import { GenericFilterResponse } from 'src/app/models/generic-filter-response.model';
import { EmpresaResponse } from '../../../models/empresas-response.module';
import { EmpresasService } from '../../../service/empresas.service';

@Component({
  selector: 'app-mant-empresas-list',
  templateUrl: './mant-empresas-list.component.html',
  styleUrls: ['./mant-empresas-list.component.scss']
})
export class MantEmpresaListComponent {
  empresas: EmpresaResponse[] = [];
  modalRef?: BsModalRef;
  empresaSelected: EmpresaResponse = new EmpresaResponse();
  titleModal:string="";
  accionModal:number=0;
  myFormFilter: FormGroup;
  totalItems:number = 0;
  itemsPerPage: number = 3;
  request: GenericFilterRequest= new GenericFilterRequest();
  

  constructor(
    private _route: Router,
    private fb: FormBuilder,
    private _empresaService: EmpresasService,
    private modalService: BsModalService
  )
  {
    this.myFormFilter = this.fb.group({
      ruc: ["",[]],
      razonSocial: ["",[]],
      telefono: ["",[]],
      contacto: ["",[]],
      email: ["",[]],
      });
  }

  ngOnInit(): void {
    this.filtrar();
  }

  listarEmpresa(){
    this._empresaService.getAll().subscribe({
      next:(data:EmpresaResponse[])=>{
        this.empresas = data;
        
      },
      error:(err)=>{
        alert_success("ERROR",err)
      },
      complete:()=>{},
    })
  }


  crearEmpresa(template: TemplateRef<any>)
  {
    this.empresaSelected = new EmpresaResponse();
    this.titleModal= "NUEVA EMPRESA";
    this.accionModal = AccionMantConst.crear;
    this.openModal(template);
  }

  editarEmpresa(template: TemplateRef<any>, empresa:EmpresaResponse)
  {
    this.empresaSelected = empresa;
    this.titleModal= "MODIFICAR EMPRESA";
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
      this.listarEmpresa();
    }
  }

  eliminarRegistro(id: number)
  {
    let result = confirm("Está seguro de eliminar el registro?");  
    if(result)
    {
      this._empresaService.delete(id).subscribe({
        next:(data:number) =>{
          alert_success("Registro eliminado de forma correcta","")
        },
        error:() =>{},
        complete:() =>{
          this.listarEmpresa();
        },
      })
    }  
  }

  filtrar(){
    let valueForm = this.myFormFilter.getRawValue();
    console.log(this.myFormFilter.getRawValue());

    this.request.filtros.push({name:"ruc", value:valueForm.ruc});
    this.request.filtros.push({name:"razonSocial", value:valueForm.razonSocial});
    this.request.filtros.push({name:"telefono", value:valueForm.telefono});
    this.request.filtros.push({name:"contacto", value:valueForm.contacto});
    this.request.filtros.push({name:"email", value:valueForm.email});

    this._empresaService.genericFilter(this.request).subscribe({
      next:(data: GenericFilterResponse<EmpresaResponse>)=> {
        console.log(data);
        this.empresas = data.lista;
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
