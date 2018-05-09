import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  exibir: Boolean = false;
  sideNavActions = new EventEmitter<any|MaterializeAction>();

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.inscricao = this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.exibir = mostrar
    );
  }

    ngOnDestroy() {
      this.inscricao.unsubscribe();
    }

    closeSideNav() {
            this.sideNavActions.emit({action: 'sideNav', params: ['hide']});
    }

    sair() {
      localStorage.removeItem('user-status');
      this.route.navigate(['login']);
      this.authService.mostrarMenuEmitter.emit(false);
    }

}
