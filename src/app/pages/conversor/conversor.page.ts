import { Component, OnInit } from '@angular/core';
import { ConvertService } from 'src/app/services/convert.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  pageTitle = 'Conversor';
  isNotHome = false;

  constructor(private convertService: ConvertService) { }

  ngOnInit() {
  }

  
}
