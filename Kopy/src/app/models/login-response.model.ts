import { ClienteResponse } from "./cliente-response.model";
import { RoleResponse } from "./rol-response.model";
import { UsuarioLoginResponse } from "./usuario-login-response.model";

export class LoginResponse {
    success: boolean = false;
    mensaje: string = "";
    token: string = "";
    tokenExpira: string = "";
    usuario: UsuarioLoginResponse = new UsuarioLoginResponse;
    role: RoleResponse = new RoleResponse;
    cliente: ClienteResponse = new ClienteResponse;
}