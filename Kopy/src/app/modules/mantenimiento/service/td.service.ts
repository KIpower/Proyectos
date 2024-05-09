import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/url.constants';
import { CrudService } from '../../shared/services/crud.service';
import { TipoDocumentoRequest } from '../models/td-request.module';
import { TipoDocumentoResponse } from '../models/td-response.module';

@Injectable({
  providedIn: 'root'
})
export class TdService extends CrudService<TipoDocumentoRequest,TipoDocumentoResponse> {

  constructor(
    protected http: HttpClient,
  ){
    super(http, urlConstants.td);
   }
}
