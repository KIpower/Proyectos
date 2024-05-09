import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantRolListComponent } from './component/rol/mant-rol-list/mant-rol-list.component';
import { MantRolRegisterComponent } from './component/rol/mant-rol-register/mant-rol-register.component';
import { MantTdRegisterComponent } from './component/td/mant-td-register/mant-td-register.component';
import { MantTdListComponent } from './component/td/mant-td-list/mant-td-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MantRolMultipleComponent } from './component/rol/mant-rol-multiple/mant-rol-multiple.component';
import { MantTdMultipleComponent } from './component/td/mant-td-multiple/mant-td-multiple.component';
import { MantCategoriasListComponent } from './component/categorias/mant-categorias-list/mant-categorias-list.component';
import { MantCategoriasMultipleComponent } from './component/categorias/mant-categorias-multiple/mant-categorias-multiple.component';
import { MantCategoriasRegisterComponent } from './component/categorias/mant-categorias-register/mant-categorias-register.component';
import { MantProductosListComponent } from './component/productos/mant-productos-list/mant-productos-list.component';
import { MantProductosMultipleComponent } from './component/productos/mant-productos-multiple/mant-productos-multiple.component';
import { MantProductosRegisterComponent } from './component/productos/mant-productos-register/mant-productos-register.component';
import { MantMpListComponent } from './component/mp/mant-mp-list/mant-mp-list.component';
import { MantMpMultipleComponent } from './component/mp/mant-mp-multiple/mant-mp-multiple.component';
import { MantMpRegisterComponent } from './component/mp/mant-mp-register/mant-mp-register.component';
import { MantEpListComponent } from './component/ep/mant-ep-list/mant-ep-list.component';
import { MantEpRegisterComponent } from './component/ep/mant-ep-register/mant-ep-register.component';
import { MantEmpresaListComponent } from './component/empresas/mant-empresas-list/mant-empresas-list.component';
import { MantEmpresaRegisterComponent } from './component/empresas/mant-empresas-register/mant-empresas-register.component';
import { MantCpsListComponent } from './component/cp/mant-cp-list/mant-cp-list.component';
import { MantCpRegisterComponent } from './component/cp/mant-cp-register/mant-cp-register.component';


@NgModule({
  declarations: [
    MantRolListComponent,
    MantRolRegisterComponent,
    MantTdRegisterComponent,
    MantTdListComponent,
    MantRolMultipleComponent,
    MantTdMultipleComponent,
    MantCategoriasListComponent,
    MantCategoriasMultipleComponent,
    MantCategoriasRegisterComponent,
    MantProductosListComponent,
    MantProductosMultipleComponent,
    MantProductosRegisterComponent,
    MantMpListComponent,
    MantMpMultipleComponent,
    MantMpRegisterComponent,
    MantEpListComponent,
    MantEpRegisterComponent,
    MantEmpresaListComponent,
    MantEmpresaRegisterComponent,
    MantCpsListComponent,
    MantCpRegisterComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule, 
    SharedModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class MantenimientoModule { }
