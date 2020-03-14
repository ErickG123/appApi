import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  //Listar todos os usuários
  public listarUsuarios(pagina: Number){
    return this.http.get(`${this.url}?page=${pagina}`);
  }

  //Listar apenas um usuário
  public buscarUsuario(id: Number){
    return this.http.get(`${this.url}/${id}`)
  }
}
