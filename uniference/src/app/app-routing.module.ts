import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './rutas/page-not-found/page-not-found.component';
import { EvaluarComponent } from './rutas/evaluar/evaluar.component';
import { TutoresComponent } from './rutas/tutores/tutores.component';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { LoginComponent } from './rutas/users/login/login.component';
import { RegistroComponent } from './rutas/users/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'tutores',
    component: TutoresComponent
  },
  {
    path: 'evaluar',
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
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
