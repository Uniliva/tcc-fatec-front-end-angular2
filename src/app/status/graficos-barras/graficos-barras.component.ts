import { Component, OnInit, Input } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-graficos-barras',
  templateUrl: './graficos-barras.component.html',
  styleUrls: ['./graficos-barras.component.css']
})
export class GraficosBarrasComponent implements OnInit {
  data: any

  constructor() { 
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }

   }
  ngOnInit() {
    
  }

}
