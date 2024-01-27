import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';
import { JwtService } from 'src/app/shared/services/jwt.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  role:string|any;
  constructor(private jwtSvc:JwtService){
    this.role=this.jwtSvc.getClaimFromToken(TokenClaims.role)
  }
 
}
