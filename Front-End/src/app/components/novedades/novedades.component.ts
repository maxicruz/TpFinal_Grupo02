import { Component, OnInit } from '@angular/core';
import { Novedad } from 'src/app/models/novedad';
import { Usuario } from 'src/app/models/usuario';
import { NovedadService } from 'src/app/services/novedad.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  _novedad: Novedad;
  _novedades: Array<Novedad>;
  _usuarios: Array<Usuario>;

  constructor(private _usuarioService: UsuarioService, private _novedadService: NovedadService, private _toastr: ToastrService) { 
    this._novedad = new Novedad();
    this._novedades = new Array<Novedad>();
    this._usuarios = new Array<Usuario>();
    this.listarUsuarios();
    this.listarNovedades();
  }

  public listarNovedades() {
    this._novedadService.getNovedades().subscribe(
      (result) => {
        console.log(result);
        this._novedades = new Array<Novedad>();
        result.forEach(element => {
          var _pay: Novedad = new Novedad();
          Object.assign(_pay, element);
          this._novedades.push(_pay);
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public agregarNovedad() {
    console.log(this._novedad);
    this._novedadService.addNovedad(this._novedad).subscribe(
      (result) => {
        this.listarNovedades();
        this.limpiarNovedad();
        this._toastr.success("Novedad Realizado Correctamente");
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public listarUsuarios() {
    this._usuarioService.getUsuarios().subscribe(
      (result) => {
        this._usuarios = new Array<Usuario>();
        result.forEach(element => {
          var _usu: Usuario = new Usuario();
          Object.assign(_usu, element);
          this._usuarios.push(_usu);
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public limpiarNovedad() {
    this._novedad = new Novedad();
  }

  ngOnInit(): void {
  }

}
