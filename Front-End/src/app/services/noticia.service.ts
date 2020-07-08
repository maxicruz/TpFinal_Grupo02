import { Injectable } from '@angular/core';
import { Noticia } from '../models/noticia';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  URL: string = "http://localhost:3000/api/noticias/";

  constructor(private _http: HttpClient) { }

  public getNoticias(): Observable<any> {
    return this._http.get(this.URL);
  }

  public addNoticia(_noticia: Noticia): Observable<any> {
    const _httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var _body = JSON.stringify(_noticia);
    return this._http.post(this.URL, _body, _httpOptions);
  }

  public updateNoticia(_noticia: Noticia) :Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(_noticia);
    return this._http.put(this.URL + _noticia._id , body , httpOptions );
  }

  public deleteNoticia(_noticia: Noticia):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    }; 
    return this._http.delete( this.URL + _noticia._id , httpOptions );
  }
}