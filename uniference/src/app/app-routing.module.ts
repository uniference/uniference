import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Rutas/page-not-found/page-not-found.component';
import { EvaluarComponent } from './Rutas/Evaluar/evaluar.component';
import { TutoresComponent } from './Rutas/Tutores/tutores.component';
import { InicioComponent } from './Rutas/Inicio/inicio.component';
import { LoginComponent } from './Rutas/Users/login/login.component';
import { RegistroComponent } from './Rutas/Users/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'Tutores',
    component: TutoresComponent
  },
  {
    path: 'Evaluar',
    component: EvaluarComponent
  },
  { 
    path: 'user/login', 
    component: LoginComponent,  
    pathMatch: 'full'
  },
  { 
    path: 'user/registro', 
    component: RegistroComponent,  
    pathMatch: 'full'
  },
  {
    path: 'Page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'Page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
