import { Component, OnInit } from '@angular/core';
import { DocentesService } from 'src/app/servicios/docentes.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
myform:FormGroup
  id_editar:number=0;

  constructor( private _builder:FormBuilder, private docentes: DocentesService) { 
  this.myform=this._builder.group({
    fullname: ['',[Validators.required, Validators.minLength(70)]],
    num_cc: ['',[Validators.required, Validators.minLength(15)]],
    gender: ['',[Validators.required, Validators.minLength(10)]],
    phone: ['',[Validators.required, Validators.minLength(15)]],
    email: ['',[Validators.required, Validators.minLength(70)]],

  })

}
lista_docentes: any;
nuevodoc= {
  fullname:null,
  num_cc:null,
  gender:null,
  phone:null,
  email:null,

}



  ngOnInit()  {

    this.MostrarTodos();
    
  }

  MostrarTodos(){
    this.docentes.MostrarTodos().subscribe(result => this.lista_docentes = result);
  }

insertar(value:any){
  this.nuevodoc={
    fullname:value.fullname,
    num_cc:value.num_cc,
    gender:value.gender,
    phone:value.phone,
    email:value.email

  }
  this.docentes.insertar(this.nuevodoc).subscribe(datos => {console.log(datos)
  alert("Docente agrgado")
  this.myform.reset()
  this.MostrarTodos()
  
  
  } );


}

eliminar(id:number){
  if(window.confirm("Seguro quiere eliminar al Docente "+id+"?")){
    this.docentes.eliminar(id).subscribe(datos => {
      console.log(datos)
      alert("Docente eliminado")
      this.myform.reset()
      this.MostrarTodos()


    })
  }
}

editar(value:any){
  this.nuevodoc={
    fullname:value.fullname,
    num_cc:value.num_cc,
    gender:value.gender,
    phone:value.phone,
    email:value.email

  }
this.docentes.editar(this.nuevodoc,this.id_editar).subscribe(datos => {
console.log(datos)
alert("Docente editado")
this.myform.reset(
  this.MostrarTodos()
)

})

}


seleccionar(doc_edi:any){
  this.id_editar=doc_edi['id'];
  this.myform.setValue({
    fullname:doc_edi['fullname'],
    num_cc:doc_edi['num_cc'],
    gender:doc_edi['gender'],
    phone:doc_edi['phone'],
    email:doc_edi['email']
  })
}




}
