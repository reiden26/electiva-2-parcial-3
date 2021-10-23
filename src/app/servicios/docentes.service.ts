import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {
  url='http://127.0.0.1:3000/';

  constructor(private http: HttpClient) { }

 

MostrarTodos() {

  return this.http.get(`${this.url}list_doc`);
  
}

// insertar
insertar(docentes:any):Observable<any>{
  return this.http.post(`${this.url}add_docente`,docentes);
}

//eliminar
eliminar(id:number){
  return this.http.delete(`${this.url}delete_docente/${id}`);

}

//editar
editar(docentes:any, id:number){
  return this.http.put(`${this.url}update_docente/`+id, docentes);
}

}
