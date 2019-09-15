import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MenuComponent } from './rutas/evaluar/componentes_evaluar/menu/menu.component';
import { MatToolbarModule, MatTabsModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { ComentarComponent } from './rutas/evaluar/componentes_evaluar/comentar/comentar.component';
import { BuscarComponent } from './rutas/evaluar/componentes_evaluar/buscar/buscar.component';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PageNotFoundComponent } from './rutas/page-not-found/page-not-found.component';
import { EvaluarComponent } from './rutas/evaluar/evaluar.component';
import { TutoresComponent } from './rutas/tutores/tutores.component';
import { ApartamentosComponent } from './rutas/apartamentos/apartamentos.component';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { UsuarioService } from './usuario.service';
import { LoginComponent } from './rutas/users/login/login.component';
import { ListadoComponent } from './rutas/apartamentos/componentes_apartamentos/listado/listado.component';
import { NavbarComponent } from './rutas/navbar/navbar.component';
import { ModalComponent } from './rutas/modal/modal.component';
import { PerfilComponent } from './rutas/users/perfil/perfil.component';
import { RegistroComponent } from './rutas/users/registro/registro.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { PuntajeComponent } from './rutas/evaluar/componentes_Evaluar/comentar/puntaje/puntaje.component';



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
