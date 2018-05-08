import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from './services/auth.service';
import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit, OnDestroy {
  inscricao: Subscription;
  mostrarMenu: Boolean = true;
  sideNavActions = new EventEmitter<any|MaterializeAction>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.inscricao = this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

    ngOnDestroy() {
      this.inscricao.unsubscribe();
    }

    closeSideNav() {
            this.sideNavActions.emit({action: 'sideNav', params: ['hide']});
    }



}
