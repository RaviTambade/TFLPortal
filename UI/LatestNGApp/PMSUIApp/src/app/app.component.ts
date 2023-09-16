import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor( private authsvc:AuthenticationService){}
  ngOnInit(): void {
    this.authsvc.reloadSubject$.subscribe(()=>{
      setTimeout(()=>{
        window.location.reload();

      },100)
    })
  }
  title = 'app';
  isLoggedIn(): boolean {
    let jwt = localStorage.getItem("jwt")
    return jwt != null;
  }
}
