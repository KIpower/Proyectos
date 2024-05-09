import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/url.constants';
import { CrudService } from '../../shared/services/crud.service';
import { EmpresaRequest } from '../models/empresas-request.module';
import { EmpresaResponse } from '../models/empresas-response.module';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService extends CrudService<EmpresaRequest,EmpresaResponse> {

  constructor(
    protected http: HttpClient,
  ){
    super(http, urlConstants.empresas);
   }
}
