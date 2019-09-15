import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluar',
  templateUrl: './evaluar.component.html',
  styleUrls: ['./evaluar.component.scss']
})
export class EvaluarComponent implements OnInit {
  title = 'UNIFERENCE';
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  
  constructor() { }

  ngOnInit() {
  }

}
