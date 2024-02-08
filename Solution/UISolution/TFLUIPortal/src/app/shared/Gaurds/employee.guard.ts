import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/shared/enums/role';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';
import { JwtService } from '../services/JwtHelperService/jwt.service';

@Injectable({
  providedIn: 'root'
})


export class EmployeeGuard implements CanActivate {

  constructor(private  jwtSvc: JwtService, private router: Router  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      const role = this.jwtSvc.getClaimFromToken(TokenClaims.role);

      if (role == Role.Employee ) {
        return true;
      }

     this.router.navigate(['/home']);
     return false;
  }
  
}
