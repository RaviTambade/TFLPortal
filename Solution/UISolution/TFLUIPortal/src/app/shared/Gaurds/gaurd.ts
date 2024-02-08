import { inject } from '@angular/core';
import {
  CanMatchFn,
  CanActivateChildFn,
  CanActivateFn,
  Router,
} from '@angular/router';
import { Role } from 'src/app/shared/enums/role';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';
import { JwtService } from '../services/JwtHelperService/jwt.service';

export function HRRouteGaurd(): CanMatchFn| CanActivateChildFn | CanActivateFn {
  return function () {
    const jwtSvc: JwtService = inject(JwtService);
    const role = jwtSvc.getClaimFromToken(TokenClaims.role);
    if (role == Role.HRManager) {
      return true;
    }
    const router: Router = inject(Router);
    return router.navigate(['/home']);
  };
};
