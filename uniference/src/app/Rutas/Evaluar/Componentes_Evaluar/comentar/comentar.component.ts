import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ComentariosService } from 'src/app/services/comentarios.service';



@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class ComentarComponent implements OnInit {
  Comentario: FormGroup;
  univ: String;
 
  constructor(private _formBuilder: FormBuilder,public comentarioService: ComentariosService) { }

  ngOnInit() {
    this.Comentario = this._formBuilder.group({
      profesor: ['', Validators.required],
      materia: ['', Validators.required],
      comentario: ['', Validators.required],
      rating: ['', Validators.required],
      aceptado: [false]
    });
  }
  onSubmit(){
    switch (this.univ) {
      case "utp":
        this.comentarioService.crearComentarioUTP(this.Comentario.value)
      break;
      case "latina":
        this.comentarioService.crearComentarioLATINA(this.Comentario.value)
      break;
      case "nacional":
        this.comentarioService.crearComentarioNACIONAL(this.Comentario.value)
      break;
      case "usma":
        this.comentarioService.crearComentarioUSMA(this.Comentario.value)
      break;
    
      default:
        break;
    }  
  }

}
