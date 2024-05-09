import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/url.constants';
import { RoleResponse } from '../models/rol-response.model';
import { RoleRequest } from '../models/rol-request.model';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class RolService extends CrudService<RoleRequest,RoleResponse> {

  constructor(
    protected http: HttpClient,
  ){
    super(http, urlConstants.rol);
   }
  
  // getAll(): Observable<RoleResponse[]>
  // {
  //   // let auth_token = sessionStorage.getItem("token");
  //   // const jwtHeaders = new HttpHeaders({
  //   //   'Content-Type': 'application/json',
  //   //   'Authorization': `Bearer ${auth_token}`
  //   // })
  //   // return this._http.get<RoleResponse[]>(urlConstants.rol,{headers: jwtHeaders});
  //   return this._http.get<RoleResponse[]>(urlConstants.rol);
  // };
  // create(request:RoleRequest) : Observable<RoleResponse>{
  //   return this._http.post<RoleResponse>(urlConstants.rol,request);
  // };
  // update(request:RoleRequest) : Observable<RoleResponse>{
  //   return this._http.put<RoleResponse>(urlConstants.rol,request);
  // };
  // delete(id: number): Observable<number>{
  //   return this._http.delete<number>(`${urlConstants.rol}${id}`);
  // };

}
