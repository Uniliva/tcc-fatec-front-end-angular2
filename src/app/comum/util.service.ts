import { Injectable } from '@angular/core';

import { toast } from 'angular2-materialize';

@Injectable()
export class UtilService {
  toast: any;
  constructor() { }

  alerta() {
   this.toast = toast('teste <a class= (click)="remove()"><i class="material-icons">close</i></a>');
  }

}


