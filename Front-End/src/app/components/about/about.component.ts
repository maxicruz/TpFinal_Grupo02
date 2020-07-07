import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { ServicioService } from 'src/app/services/servicio.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	
	_servicio: Array<Servicio>;
  constructor(private _servicioService: ServicioService) { 
	this._servicio = new Array<Servicio>();
    this.obtenerServicios();
	
  }	
	
  ngOnInit(): void {
  }

  /*Refresca los servicios por si se creo uno nuevo*/  
  public obtenerServicios() {
    this._servicioService.getServicios().subscribe(
      (result) => {
        this._servicio = new Array<Servicio>();
        result.forEach(element => {
          var _noti: Servicio = new Servicio();
          Object.assign(_noti, element);
          this._servicio.push(_noti);
        })
      }
    )
  }
  
}
