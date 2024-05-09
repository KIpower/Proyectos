import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/url.constants';
import { CrudService } from '../../shared/services/crud.service';
import { ComprobantePagoRequest } from '../models/cp-request.module';
import { ComprobantePagoResponse } from '../models/cp-response.module';

@Injectable({
  providedIn: 'root'
})
export class CpService extends CrudService<ComprobantePagoRequest,ComprobantePagoResponse> {

  constructor(
    protected http: HttpClient,
  ){
    super(http, urlConstants.cp);
   }
}
