import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleResponse } from '../../../models/rol-response.model';
import { RolService } from '../../../service/rol.service';

@Component({
  selector: 'app-mant-rol-multiple',
  templateUrl: './mant-rol-multiple.component.html',
  styleUrls: ['./mant-rol-multiple.component.scss']
})
export class MantRolMultipleComponent implements OnInit {
  form:FormGroup;
  rolesBack:RoleResponse[] = []
  constructor(
    private fb:FormBuilder,
    private _rolService:RolService
  )
  {
    this.form = this.fb.group({
      roles: this.fb.array([])
    });
  }
  ngOnInit(): void {

    this._rolService.getAll().subscribe({
      next: (data:RoleResponse[])=>{
        this.rolesBack = data; 

        this.rolesBack.forEach(x => {
          let rol = this.nuevoRol(x);
          this.rolesArrayForm.push(rol);
        });
      },
      error:()=>{},
      complete:()=>{},
    })

  }


  get rolesArrayForm(): FormArray { return this.form.get("roles") as FormArray };

  addRol()
  {
    let rol = this.nuevoRol(new RoleResponse())
    this.rolesArrayForm.push(rol);
  }

  nuevoRol(rol: RoleResponse) {
    return this.fb.group({
      id: [{ value: rol.id, disabled: true }, [Validators.required]],
      descripcion: [rol.descripcion, [Validators.required]],
      funcion: [rol.funcion, [Validators.required]],
    })
  }
  removeRol(i: number) {
    this.rolesArrayForm.removeAt(i)
  }

  save()
  {
    console.log(this.form.getRawValue());
    
  }
}
