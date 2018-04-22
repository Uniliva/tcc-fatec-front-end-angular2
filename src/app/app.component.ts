import { UtilService } from './comum/util.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private util: UtilService) {  }
  uai = true;
  tes() {
    return this.uai = !this.uai;
  }
}
