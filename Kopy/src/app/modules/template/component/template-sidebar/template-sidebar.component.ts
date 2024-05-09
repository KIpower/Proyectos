import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-sidebar',
  templateUrl: './template-sidebar.component.html',
  styleUrls: ['./template-sidebar.component.scss']
})
export class TemplateSidebarComponent implements OnInit {
  menu:any[]=[];
  ngOnInit(): void {
    this.rellenarMenu();
  }

  rellenarMenu()
  {
    let rolId= sessionStorage.getItem("rolId");

    switch(rolId)
    {
      case "3":
        this.menu = [
          {
            name:"Mantenimiento", target:"TargetMantenimiento", icon: "fas fa-trash",
            subMenu: [
              { name:"rol",url:"mantenimiento/rol",icon:"fas fa-user",},
              // { name:"persona",url:"mantenimiento/persona",icon:"fas fa-user",},
              { name:"td",url:"mantenimiento/td",icon:"fas fa-file",},
              { name:"categoria",url:"mantenimiento/categorias",icon:"fas fa-file",},
              { name:"producto",url:"mantenimiento/productos",icon:"fas fa-file",},
              { name:"cp",url:"mantenimiento/cp",icon:"fas fa-user",},
              { name:"empresa",url:"mantenimiento/empresas",icon:"fas fa-user",},
              { name:"ep",url:"mantenimiento/ep",icon:"fas fa-user",},
              // { name:"usuario",url:"mantenimiento/usuario",icon:"fas fa-user",},
            ]
          },
           {
             name:"Atencion", target:"TargetAtencion", icon: "fas fa-edit",
             subMenu: [
               { name:"atencion 1",url:"mantenimiento/rol",icon:"fas fa-edit",},
               { name:"atencion 2",url:"mantenimiento/persona",icon:"fas fa-user",},
               { name:"atencion 3",url:"mantenimiento/tipo_documento",icon:"fas fa-file",},
               { name:"atencion 4",url:"mantenimiento/usuario",icon:"fas fa-user",},
             ]
           },
        ]        
      break;
      case "2": break;
      case "3": break;
      case "4": break;
      case "5": 
      this.menu = [
         {
           name:"Atencion", target:"TargetAtencion", icon: "fas fa-edit",
           subMenu: [
             { name:"atencion 1",url:"mantenimiento/rol",icon:"fas fa-edit",},
             { name:"atencion 2",url:"mantenimiento/persona",icon:"fas fa-user",},
             { name:"atencion 3",url:"mantenimiento/tipo_documento",icon:"fas fa-file",},
             { name:"atencion 4",url:"mantenimiento/usuario",icon:"fas fa-user",},
           ]
         },
      ]  ;
      break;
      case "6": break;
    }
  }


}
