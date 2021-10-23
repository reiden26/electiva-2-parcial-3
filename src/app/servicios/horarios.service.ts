import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  url='http://127.0.0.1:3000/';

  constructor(private http: HttpClient) { }

 

ClaseTodos() {

  return this.http.get(`${this.url}list_clases`);
  
}

// insertar
insertarCla(horarios:any):Observable<any>{
  return this.http.post(`${this.url}add_clase`,horarios);
}

//eliminar
eliminarCla(clases_id:number){
  return this.http.delete(`${this.url}delete_clases/${clases_id}`);

}

//editar
editarCla(horarios:any, clases_id:number){
  return this.http.put(`${this.url}update_clase/`+clases_id, horarios);
}

}
