import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.component.html',
  styleUrls: ['./auth-guard.component.css']
})
@Injectable()
export class AuthGuardComponent implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // If the previous URL was blank, then the user is directly accessing this page
    if (this.router.url === '/') {
      this.router.navigate(['Home']); // Navigate away to some other page
      return false;
    }
    return true;
  }
  }


