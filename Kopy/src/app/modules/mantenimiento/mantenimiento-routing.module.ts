import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantRolListComponent } from './component/rol/mant-rol-list/mant-rol-list.component';
import { MantTdListComponent } from './component/td/mant-td-list/mant-td-list.component';
import { MantRolMultipleComponent } from './component/rol/mant-rol-multiple/mant-rol-multiple.component';
import { MantTdMultipleComponent } from './component/td/mant-td-multiple/mant-td-multiple.component';
import { MantCategoriasListComponent } from './component/categorias/mant-categorias-list/mant-categorias-list.component';
import { MantProductosListComponent } from './component/productos/mant-productos-list/mant-productos-list.component';
import { MantCpsListComponent } from './component/cp/mant-cp-list/mant-cp-list.component';
import { MantEmpresaListComponent } from './component/empresas/mant-empresas-list/mant-empresas-list.component';
import { MantEpListComponent } from './component/ep/mant-ep-list/mant-ep-list.component';

const routes: Routes = [

  {
    path:'rol', component: MantRolListComponent
  },
  // {
  //   path:'rol', component: MantRolMultipleComponent
  // },  
  {
    path:'td', component: MantTdListComponent
  },
  {
    path:'categorias', component: MantCategoriasListComponent
  },
  {
    path:'productos', component: MantProductosListComponent
  },
  {
    path:'cp', component: MantCpsListComponent
  },
  {
    path:'empresas', component: MantEmpresaListComponent
  },
  {
    path:'ep', component: MantEpListComponent
  },
  // {
  //   path:'td', component: MantTdMultipleComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
