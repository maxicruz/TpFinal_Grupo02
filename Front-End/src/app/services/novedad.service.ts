import { Injectable } from '@angular/core';
import { Novedad } from '../models/novedad';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovedadService {

  URL: string = "http://localhost:3000/api/novedades"

  constructor(private _http: HttpClient) { }

  public getNovedades(): Observable<any> {
    return this._http.get(this.URL);
  }

  public addNovedad(_novedad: Novedad): Observable<any> {
    const _httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var _body = JSON.stringify(_novedad);

    return this._http.post(this.URL, _body, _httpOptions);
  }

  public updateNovedad(_novedad: Novedad) {
    return this._http.put(this.URL + "/" + _novedad._id, _novedad);
  }

  public deleteNovedad(_id: any) {
    return this._http.delete(this.URL + "/" + _id);
  }
}
