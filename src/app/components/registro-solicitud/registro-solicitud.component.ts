import { Component } from '@angular/core';
import { RegistroSolicitudService } from 'src/app/services/registro-solicitud.service';

@Component({
  selector: 'app-registro-solicitud',
  templateUrl: './registro-solicitud.component.html',
  styleUrls: ['./registro-solicitud.component.css']
})
export class RegistroSolicitudComponent {
  solicitud: any = {};
  solicitudes: any = {};


  constructor(private registrosolicitudService: RegistroSolicitudService) { }

  ngOnInit() {
    this.listarSolicitudes();
  }

  onSubmit() {
    this.registrosolicitudService.registrarSolicitud(this.solicitud)
      .subscribe(
        response => {
          console.log(response);
          this.listarSolicitudes(); 
        },
        error => {
          console.error(error);
        }
      );
  }

  listarSolicitudes() {
    this.registrosolicitudService.listarSolicitudes()
      .subscribe(
        data => {
          this.solicitudes = data;
        },
        error => {
          console.error(error);
        }
      );
  }

}
