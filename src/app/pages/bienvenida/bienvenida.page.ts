import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  pageTitle = 'Inicio';
  isNotHome = false;

  constructor() { }

  ngOnInit() {
  }

}
