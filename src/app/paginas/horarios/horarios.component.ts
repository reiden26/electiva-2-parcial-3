import { Component, OnInit } from '@angular/core';
import { HorariosService } from 'src/app/servicios/horarios.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
myform2:FormGroup
  cla_id_editar:number=0;

  constructor( private _builder:FormBuilder, private horarios: HorariosService) { 
  this.myform2=this._builder.group({
    nom_clase: ['',[Validators.required, Validators.minLength(70)]],
   descripcion: ['',[Validators.required, Validators.minLength(40)]],
    hora_inicio: ['',[Validators.required, ]],
    hora_fin: ['',[Validators.required, ]],
    

  })

}
lista_clases: any;
nuevaclase= {
  nom_clase:null ,
  descripcion:null,
  hora_inicio:null,
  hora_fin:null
  

}



  ngOnInit()  {

    this.ClaseTodos();
    
  }

  ClaseTodos(){
    this.horarios.ClaseTodos().subscribe(result => this.lista_clases = result);
  }

insertarCla(value:any){
  this.nuevaclase={
    nom_clase:value.nom_clase,
    descripcion:value.descripcion,
    hora_inicio:value.hora_inicio,
    hora_fin:value.hora_fin

  }
  this.horarios.insertarCla(this.nuevaclase).subscribe(datos => {console.log(datos)
  alert("Clase agregado")
  this.myform2.reset()
  this.ClaseTodos()
  
  
  } );


}

eliminarCla(clases_id:number){
  if(window.confirm("Seguro quiere eliminar la clase "+clases_id+"?")){
    this.horarios.eliminarCla(clases_id).subscribe(datos => {
      console.log(datos)
      alert("Clase eliminada")
      this.myform2.reset()
      this.ClaseTodos()


    })
  }
}

editarCla(value:any){
  this.nuevaclase={
    nom_clase:value.nom_clase,
    descripcion:value.descripcion,
    hora_inicio:value.hora_inicio,
    hora_fin:value.hora_fin

  }
this.horarios.editarCla(this.nuevaclase,this.cla_id_editar).subscribe(datos => {
console.log(datos)
alert("Clase editado")
this.myform2.reset(
  this.ClaseTodos()
)

})

}


seleccionarCla(cla_edi:any){
  this.cla_id_editar=cla_edi['clases_id'];
  this.myform2.setValue({
   nom_clase:cla_edi['nom_clase'],
    descripcion:cla_edi['descripcion'],
    hora_inicio:cla_edi['hora_inicio'],
    hora_fin:cla_edi['hora_fin']
    
  })
}




}
