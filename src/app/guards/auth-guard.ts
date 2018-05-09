import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private route: Router, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.authService.estaLogado) {
      this.authService.mostrarMenuEmitter.emit(true);
      return true;
    }

    this.route.navigate(['/login']);
    this.authService.mostrarMenuEmitter.emit(false);

    return false;

  }



}
