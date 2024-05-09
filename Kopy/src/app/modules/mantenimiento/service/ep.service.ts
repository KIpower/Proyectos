import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/url.constants';
import { CrudService } from '../../shared/services/crud.service';
import { EstadoPedidoRequest } from '../models/ep-request.module';
import { EstadoPedidoResponse } from '../models/ep-response.module';

@Injectable({
  providedIn: 'root'
})
export class EpService extends CrudService<EstadoPedidoRequest,EstadoPedidoResponse> {

  constructor(
    protected http: HttpClient,
  ){
    super(http, urlConstants.ep);
   }
}
