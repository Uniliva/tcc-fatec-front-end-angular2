import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  @Input() isVisivel: Boolean;
  @Input() classeCor: String;


  constructor() { }

  ngOnInit() {
  }



}

 // <app-alerta [isVisivel]="true" classeCor="blue">
//    Favor digitar o senha
//  </app-alerta>
