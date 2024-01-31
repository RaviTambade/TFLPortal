import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LocalStorageKeys } from '../../enums/local-storage-keys';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
   
    return next.handle(request).pipe(
      tap((res) => {
        if (res instanceof HttpResponse) {
          let body: any = res.body;
          let token = body.token;
          if (token != undefined) {
            localStorage.setItem(LocalStorageKeys.jwt, token);
            console.log('adding token to localstorage');
          }
          console.log('interceptor response', res);
        }

        //   localStorage.setItem("token",)
        // console.log("from interceptor",res);
      })
    );
  }
}
