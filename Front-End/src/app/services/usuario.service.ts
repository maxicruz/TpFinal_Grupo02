import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL: string = "http://localhost:3000/api/usuarios";

  constructor(private _http: HttpClient) { }

  public getUsuarios(): Observable<any> {
    return this._http.get(this.URL);
  }

  public addUsuario(_usuario: Usuario): Observable<any> {
    const _httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var _body = JSON.stringify(_usuario);

    return this._http.post(this.URL, _body, _httpOptions);
  }

  public updateUsuario(_usuario: Usuario) :Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(_usuario);
    return this._http.put(this.URL + _usuario._id , body , httpOptions );
  }

  public deleteUsuario(_usuario: Usuario):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
  
      })
    };
    return this._http.delete( this.URL + _usuario._id , httpOptions );
  }
}
