import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { RolService } from '../../../service/rol.service';
import { RoleResponse } from '../../../models/rol-response.model';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { AccionMantConst } from 'src/app/constants/general.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericFilterRequest } from 'src/app/models/generic-filter-request.model';
import { GenericFilterResponse } from 'src/app/models/generic-filter-response.model';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { alert_success } from 'src/app/functions/general.functions';

@Component({
  selector: 'app-mant-rol-list',
  templateUrl: './mant-rol-list.component.html',
  styleUrls: ['./mant-rol-list.component.scss']
})
export class MantRolListComponent implements OnInit {

  roles: RoleResponse[] = [];
  modalRef?: BsModalRef;
  rolSelected: RoleResponse = new RoleResponse();
  titleModal:string="";
  accionModal:number=0;
  myFormFilter: FormGroup;
  totalItems:number = 0;
  itemsPerPage: number = 3;
  request: GenericFilterRequest= new GenericFilterRequest();
  

  constructor(
    private _route: Router,
    private fb: FormBuilder,
    private _rolService: RolService,
    private modalService: BsModalService
  )
  {
    this.myFormFilter = this.fb.group({
      descripcion: ["",[]],
      funcion: ["",[]],
      });
  }

  ngOnInit(): void {
    this.filtrar();
  }

  listarRol(){
    this._rolService.getAll().subscribe({
      next:(data:RoleResponse[])=>{
        this.roles = data;
        
      },
      error:(err)=>{
        console.log("Eres un error ",err);
        
      },
      complete:()=>{},
    })
  }


  crearRol(template: TemplateRef<any>)
  {
    this.rolSelected = new RoleResponse();
    this.titleModal= "NUEVO ROL";
    this.accionModal = AccionMantConst.crear;
    this.openModal(template);
  }

  editarRol(template: TemplateRef<any>, rol:RoleResponse)
  {
    this.rolSelected = rol;
    this.titleModal= "MODIFICAR ROL";
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
      this.listarRol();
    }
  }

  eliminarRegistro(id: number)
  {
    let result = confirm("Está seguro de eliminar el registro?");  
    if(result)
    {
      this._rolService.delete(id).subscribe({
        next:(data:number) =>{
          alert_success("Registro eliminado de forma correcta","")
        },
        error:() =>{},
        complete:() =>{
          this.listarRol();
        },
      })
    }  
  }

  filtrar(){
    let valueForm = this.myFormFilter.getRawValue();
    console.log(this.myFormFilter.getRawValue());

    this.request.filtros.push({name:"descripcion", value:valueForm.descripcion});
    this.request.filtros.push({name:"funcion", value:valueForm.funcion});

    this._rolService.genericFilter(this.request).subscribe({
      next:(data: GenericFilterResponse<RoleResponse>)=> {
        console.log(data);
        this.roles = data.lista;
        this.totalItems = data.totalRegistros;
      },
      error:()=> {
        console.log("error");
      },
      complete:()=> {
        console.log("completo");
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
