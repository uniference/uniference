import { Component, OnInit } from '@angular/core';
import { faComments, faSearch, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faComments = faComments
  faSearch = faSearch
  faHandsHelping = faHandsHelping

  constructor() { }

  ngOnInit() {
  }

}

