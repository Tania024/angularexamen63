import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroSolicitudService {
  private baseUrl = 'http://localhost:8080/javaexamen63/rs/solicitudes';

  constructor(private http: HttpClient) { }

  registrarSolicitud(solicitud: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/solicitud`, solicitud);
  }

  listarSolicitudes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listar`);
  }
}
