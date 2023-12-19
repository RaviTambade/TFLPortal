import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/shared/Enums/role';
import { TokenClaims } from 'src/app/shared/Enums/tokenclaims';
import { JwtService } from 'src/app/shared/services/jwt.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit{
 
  Role=Role ;
  role:string |undefined;
  constructor(private jwtService:JwtService){}
  ngOnInit(): void {
    let role = this.jwtService.getClaimFromToken(TokenClaims.role);
    console.log(role);
    if(role!=null){
      this.role=role;
    }
  }
}
