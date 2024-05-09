import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guard/auth.guard';
import { LoginComponent } from './modules/auth/components/login/login.component';

const routes: Routes = [

  {
    path:'', component: LoginComponent
  },
  {
    path:'prueba', component: PruebaComponent
  },
  {
    path:'404', component: NotFoundComponent
  },
  {
    path:'auth', loadChildren:() => import("./modules/auth/auth.module").then(x => x.AuthModule)
  },
  {
    path:'template', 
    canActivate:[authGuard],
    loadChildren:() => import("./modules/template/template.module").then(x => x.TemplateModule)
  },
  // {
  //   path:'**', redirectTo: '/404'
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
