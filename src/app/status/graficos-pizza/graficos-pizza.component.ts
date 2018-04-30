import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficos-pizza',
  templateUrl: './graficos-pizza.component.html',
  styleUrls: ['./graficos-pizza.component.css']
})
export class GraficosPizzaComponent implements OnInit {

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
