import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { ServiceLoginService } from '../service/service-login.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public serviceUserService: ServiceLoginService, public router: Router) {}

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.serviceUserService.isLoggedIn) {
      this.router.navigate(['login']);
    }
    return true;
  }
}