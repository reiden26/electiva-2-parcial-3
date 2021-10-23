import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
myform1:FormGroup
  cur_id_editar:number=0;

  constructor( private _builder:FormBuilder, private cursos: CursosService) { 
  this.myform1=this._builder.group({
    fullname: ['',[Validators.required, Validators.minLength(70)]],
   course: ['',[Validators.required, Validators.minLength(40)]],
    h_inicio: ['',[Validators.required, ]],
    h_fin: ['',[Validators.required, ]],
    

  })

}
lista_cursos: any;
nuevocurso= {
  fullname:null,
  course:null,
  h_inicio:null,
  h_fin:null
  

}



  ngOnInit()  {

    this.CursosTodos();
    
  }

  CursosTodos(){
    this.cursos.CursosTodos().subscribe(result => this.lista_cursos = result);
  }

insertarCur(value:any){
  this.nuevocurso={
    fullname:value.fullname,
    course:value.course,
    h_inicio:value.h_inicio,
    h_fin:value.h_fin
    

  }
  this.cursos.insertarCur(this.nuevocurso).subscribe(datos => {console.log(datos)
  alert("Curso agregado")
  this.myform1.reset()
  this.CursosTodos()
  
  
  } );


}

eliminarCur(course_id:number){
  if(window.confirm("Seguro quiere eliminar el registro del curso "+course_id+"?")){
    this.cursos.eliminarCur(course_id).subscribe(datos => {
      console.log(datos)
      alert("Curso eliminado")
      this.myform1.reset()
      this.CursosTodos()


    })
  }
}

editarCur(value:any){
  this.nuevocurso={
    fullname:value.fullname,
    course:value.course,
    h_inicio:value.h_inicio,
    h_fin:value.h_fin

  }
this.cursos.editarCur(this.nuevocurso,this.cur_id_editar).subscribe(datos => {
console.log(datos)
alert("Curso editado")
this.myform1.reset(
  this.CursosTodos()
)

})

}


seleccionarCur(cur_edi:any){
  this.cur_id_editar=cur_edi['course_id'];
  this.myform1.setValue({
    fullname:cur_edi['fullname'],
    course:cur_edi['course'],
    h_inicio:cur_edi['h_inicio'],
    h_fin:cur_edi['h_fin']
    
  })
}




}
