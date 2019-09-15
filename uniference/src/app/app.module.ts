import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MenuComponent } from './Rutas/Evaluar/Componentes_Evaluar/menu/menu.component';
import { MatToolbarModule, MatTabsModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { ComentarComponent } from './Rutas/Evaluar/Componentes_Evaluar/comentar/comentar.component';
import { BuscarComponent } from './Rutas/Evaluar/Componentes_Evaluar/buscar/buscar.component';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PageNotFoundComponent } from './Rutas/page-not-found/page-not-found.component';
import { EvaluarComponent } from './Rutas/Evaluar/evaluar.component';
import { TutoresComponent } from './Rutas/Tutores/tutores.component';
import { ApartamentosComponent } from './Rutas/Apartamentos/apartamentos.component';
import { InicioComponent } from './Rutas/Inicio/inicio.component';
import { UsuarioService } from './usuario.service';
import { LoginComponent } from './Rutas/Users/login/login.component';
import { ListadoComponent } from './Rutas/Apartamentos/Componentes_Apartamentos/listado/listado.component';
import { NavbarComponent } from './Rutas/navbar/navbar.component';
import { ModalComponent } from './Rutas/modal/modal.component';
import { PerfilComponent } from './Rutas/Users/perfil/perfil.component';
import { RegistroComponent } from './Rutas/Users/registro/registro.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { PuntajeComponent } from './Rutas/Evaluar/Componentes_Evaluar/comentar/puntaje/puntaje.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ComentarComponent,
    BuscarComponent,
    PageNotFoundComponent,
    EvaluarComponent,
    TutoresComponent,
    ApartamentosComponent,
    InicioComponent,
    LoginComponent,
    ListadoComponent,
    NavbarComponent,
    ModalComponent,
    PerfilComponent,
    RegistroComponent,
    PuntajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

platformBrowserDynamic().bootstrapModule(AppModule);
