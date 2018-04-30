import { Subscription } from 'rxjs/Subscription';
import { DadosService } from './../../services/dados.service';
import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-graficos-linha',
  templateUrl: './graficos-linha.component.html',
  styleUrls: ['./graficos-linha.component.css']
})
export class GraficosLinhaComponent implements OnInit {
  inscricao: Subscription;
  labelGLine = []
  dadosGLine = []
  data: any;
  options: any;

  constructor(private dadosService: DadosService, private datePipe: DatePipe) { 
    this.inscricao = this.dadosService.getDadoSensor(1, 100).subscribe(
      dadosSensor => {
        dadosSensor["dados"].forEach(d => {
        this.labelGLine.push(this.datePipe.transform(d.dataAtual, 'dd/MM - h:mm'))
        console.log(d.temperaturaAtual.length)
        this.dadosGLine.unshift(d.temperaturaAtual)
        })
        this.carrega()
      }
    );

    
    
  }
carrega() {
  this.data = {
    labels: this.labelGLine,
    responsive: true,
    datasets: [
      {
        label: 'Dados do sensor',
        backgroundColor: '',
        borderColor: '#324C5D',
        data: this.dadosGLine
      }
    ]
  }

  this.options = {
    legend: {
      position: 'bottom'
    },
    scales: {
      yAxes: [{
          ticks: {
            maxRotation: 90
              
          }
      }]
  }
  };
}

  ngOnInit() { }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
