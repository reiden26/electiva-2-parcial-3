import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Seccion1Component } from './componentes/seccion1/seccion1.component';
import { Seccion2Component } from './componentes/seccion2/seccion2.component';
import { Seccion3Component } from './componentes/seccion3/seccion3.component';

import { RegistroComponent } from './paginas/registro/registro.component';
import { HorariosComponent } from './paginas/horarios/horarios.component';
import { Seccion4Component } from './componentes/seccion4/seccion4.component';
import { EntradasComponent } from './paginas/entradas/entradas.component';
import { Seccion5Component } from './componentes/seccion5/seccion5.component';
import { CursosComponent } from './paginas/cursos/cursos.component';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContactenosComponent,
  
    EncabezadoComponent,
    MenuComponent,
    PieComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
   
    RegistroComponent,
    HorariosComponent,
    Seccion4Component,
    EntradasComponent,
    Seccion5Component,
    CursosComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
