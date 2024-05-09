import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/url.constants';
import { CrudService } from '../../shared/services/crud.service';
import { ProductoRequest } from '../models/productos-request.module';
import { ProductoResponse } from '../models/productos-response.module';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends CrudService<ProductoRequest,ProductoResponse> {

  constructor(
    protected http: HttpClient,
  ){
    super(http, urlConstants.productos);
   }
}
