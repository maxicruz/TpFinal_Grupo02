import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { ServicioService } from 'src/app/services/servicio.service';
import { ToastrService } from 'ngx-toastr';
import { Afiliado } from 'src/app/models/afiliado';
import { AfiliadoService } from 'src/app/services/afiliado.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  
  _servicio: Servicio;
  _servicioAuxiliar: Servicio;
  _servicios: Array<Servicio>;
  _convertido: string;
  afiliados: Array<Afiliado>;
  afiliadoslista: Array<Afiliado>;
  afiliadoaux:Afiliado;
  _servicioExtra: Array<any>;
  seleccion:boolean = false;
  
  constructor(private _servicioService: ServicioService,private toastr:ToastrService,private afiliadoService: AfiliadoService, private router:Router, private loginService: LoginService) { 
    if (!loginService.userLoggedIn) {
      this.router.navigateByUrl('/login');
    } 
    this._servicio = new Servicio();
    this._servicio.activo=true;  
    this._servicioAuxiliar = new Servicio();
    this._servicios = new Array<Servicio>();
    this._servicioExtra = [];
    this.obtenerServicios();
    this.refrescarAfiliados();
  }

  public obtenerServicios() {
    var servicio:Servicio = new Servicio();
    this._servicios = new Array<Servicio>();
    this._servicioService.getServicios().subscribe(
      (result)=>{(
        result.forEach(element => {
          Object.assign(servicio, element);
          this._servicios.push(servicio);
          servicio = new Servicio();
        })
      )},
      (error)=>{
        console.log(error);
      }
    )
    console.log(this._servicio.afiliadosInsc);
  }

  public modificarServicio(servicio) {
    if (this._convertido != "") {
      servicio.imagen = this._convertido;
      this.modificarServicioService(servicio);
    } else {
      this.modificarServicioService(servicio);
    }
  }

  public agregarServicio() {
    var _banderaControl: boolean = false;
    for (var i in this._servicios) {
      if (this._servicios[i].nombre == this._servicio.nombre) {
        _banderaControl = true;
      }
    }
    if (_banderaControl) {
      this.toastr.error("Nombre del servicio repetido");
    } else {
      this.agregarServicioService(); 
    }
  }
    
  public agregarServicioService() {
    this._servicio.imagen = this._convertido;
    console.log(this._servicio);
    this._servicioService.addServicio(this._servicio).subscribe(
      (result) => {
        this.obtenerServicios();
        this._convertido = "";
        this.toastr.success('Servicio Agregado Correctamente');
      },
      (error) => {
        console.log(error);
      }
    )
    this.limpiarCampos();
  }

  public limpiarCampos() {
    this.seleccion = false;
    this._servicio = new Servicio();
    
  }

  public convertirArchivo(file) {
    if (file != null) {
      console.log("Archivo cambiado..", file);
      this._convertido = file[0].base64;
    } else {
      console.log("error");
    }
  }

  public modificarServicioService(servicio) {
    this._servicioService.updateServicio(servicio).subscribe(
      (result)=>{
        this.obtenerServicios();
        this._servicioAuxiliar = new Servicio();
        this._convertido = "";
        this.toastr.info('Servicio Modificado Exitosamente');
      },
      (error)=>{
        console.log(error);
      }
    );
    this.limpiarCampos();
  }

  public eliminarServicio(servicio) {
    if(servicio.activo==false){
      this._servicioService.deleteServicio(servicio._id).subscribe(
        (result) => {
          this.obtenerServicios();
          this.toastr.info('Servicio Eliminado Correctamente');
        },
        (error) => {
          console.log(error);
        }
      )
    } else {
      this.toastr.error('No se puede eliminar porque el servicio esta activo');
    }
    
  }

  public auxiliarServicio(servicio) {
    this._servicioAuxiliar = servicio;
  }

  public seleccionarServicio(servicio: Servicio) {
    this.seleccion = true;
    var tservicio = new Servicio();
    Object.assign(tservicio,servicio);
    this._servicio = tservicio;
  }

  refrescarAfiliados(){
    var afiliado:Afiliado = new Afiliado();
    this.afiliados = new Array<Afiliado>();
    this.afiliadoService.getAfiliados().subscribe(
      (result)=>{(
        result.forEach(element => {
          Object.assign(afiliado, element);
          this.afiliados.push(afiliado);
          afiliado = new Afiliado();
        })
      )},
      (error)=>{
        console.log(error);
      }
    )
  }

  agregarAfiliado(afiliadoaux){
    var _banderaControl: boolean = false;
    for (var i in this._servicio.afiliadosInsc) {
      if (this._servicio.afiliadosInsc[i].dni == this.afiliadoaux.dni) {
        _banderaControl = true;
      }
    }
    if (_banderaControl) {
      this.toastr.error("El afiliado ya cuenta con el servicio");
    } else {
      this._servicio.afiliadosInsc.push(this.afiliadoaux);
      this.toastr.info("Haga click en *Modificar para registrar los nuevos afiliados al servicio");     
      this.afiliadoaux = new Afiliado();
    }
  }

  borrarAfiliado(afiliado:Afiliado){
    var indice = this._servicio.afiliadosInsc.findIndex((element)=> element._id == afiliado._id);
    this._servicio.afiliadosInsc.splice(indice, 1);
  }

  public imprimirServicios() {
    this._servicioExtra = [];
    for (var i in this._servicios) {
      for (var j in this._servicios[i].afiliadosInsc) {
        this._servicioExtra.push({ 
          'nombre': this._servicios[i].nombre,
          'dni': this._servicios[i].afiliadosInsc[j].dni,
          'apellido': this._servicios[i].afiliadosInsc[j].apellido,
          'nombreAfiliado': this._servicios[i].afiliadosInsc[j].nombres
        });
      }
    }
    printJS({
      printable: this._servicioExtra, 
      properties: [
        { field: 'nombre', displayName: 'Servicio' },
        { field: 'dni', displayName: 'DNI' },
        { field: 'apellido', displayName: 'Apellido' },
        { field: 'nombreAfiliado', displayName: 'Nombres' }
      ],
      header: '<h3 class="text-center">Listado de Servicios con Afiliados</h3>',
      type: 'json'
    });
  }

  mostrarEstado(estado:Boolean){
    if(estado==true){
      return "Activo"
    }
    else{
      return "Inactivo"
    }
  }

  ngOnInit(): void {
  }

}