import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/url.constants';
import { CrudService } from '../../shared/services/crud.service';
import { CategoriaRequest } from '../models/categorias-request.module';
import { CategoriaResponse } from '../models/categorias-response.module';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService extends CrudService<CategoriaRequest,CategoriaResponse> {

  constructor(
    protected http: HttpClient,
  ){
    super(http, urlConstants.categorias);
   }
}
