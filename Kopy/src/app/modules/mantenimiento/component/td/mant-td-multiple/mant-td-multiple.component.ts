import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoDocumentoResponse } from '../../../models/td-response.module';
import { TdService } from '../../../service/td.service';

@Component({
  selector: 'app-mant-td-multiple',
  templateUrl: './mant-td-multiple.component.html',
  styleUrls: ['./mant-td-multiple.component.scss']
})
export class MantTdMultipleComponent {
  form:FormGroup;
  tdsBack:TipoDocumentoResponse[] = []
  constructor(
    private fb:FormBuilder,
    private _tdService:TdService
  )
  {
    this.form = this.fb.group({
      tds: this.fb.array([])
    });
  }
  ngOnInit(): void {

    this._tdService.getAll().subscribe({
      next: (data:TipoDocumentoResponse[])=>{
        this.tdsBack = data; 

        this.tdsBack.forEach(x => {
          let td = this.nuevoTd(x);
          this.tdsArrayForm.push(td);
        });
      },
      error:()=>{},
      complete:()=>{},
    })

  }


  get tdsArrayForm(): FormArray { return this.form.get("tds") as FormArray };

  addTd()
  {
    let td = this.nuevoTd(new TipoDocumentoResponse())
    this.tdsArrayForm.push(td);
  }

  nuevoTd(td: TipoDocumentoResponse) {
    return this.fb.group({
      id: [{ value: td.id, disabled: true }, [Validators.required]],
      descripcion: [td.descripcion, [Validators.required]],
    })
  }
  removeTd(i: number) {
    this.tdsArrayForm.removeAt(i)
  }

  save()
  {
    console.log(this.form.getRawValue());
    
  }
}
