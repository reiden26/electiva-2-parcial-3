import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  url='http://127.0.0.1:3000/';

  constructor(private http: HttpClient) { }

 

CursosTodos() {

  return this.http.get(`${this.url}list_cursos`);
  
}

// insertar
insertarCur(cursos:any):Observable<any>{
  return this.http.post(`${this.url}add_course`,cursos);
}

//eliminar
eliminarCur(course_id:number){
  return this.http.delete(`${this.url}delete_course/${course_id}`);

}

//editar
editarCur(course:any, course_id:number){
  return this.http.put(`${this.url}update_course/`+course_id, course);
}

}
