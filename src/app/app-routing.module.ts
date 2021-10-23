import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { EntradasComponent } from './paginas/entradas/entradas.component';
import { HorariosComponent } from './paginas/horarios/horarios.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { RegistroComponent } from './paginas/registro/registro.component';
const routes:Routes=[
{path:'principal',component:PrincipalComponent},
{path:'registro', component:RegistroComponent},
{path:'contactenos',component:ContactenosComponent},
{path:'horarios',component:HorariosComponent},
{path:'entradas', component:EntradasComponent},
{path:'cursos', component:CursosComponent},
{path:'',redirectTo:'/principal',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
