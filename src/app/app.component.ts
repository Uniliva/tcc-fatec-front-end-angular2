import { AuthService } from './services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit, OnDestroy {
  inscricao: Subscription;
  mostrarMenu: Boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.inscricao = this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

    ngOnDestroy() {
      this.inscricao.unsubscribe();
    }
}
