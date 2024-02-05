import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageKeys } from '../../enums/local-storage-keys';

@Injectable()
export class AddJwtHeaderIntreceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwt = localStorage.getItem(LocalStorageKeys.jwt);
    if (jwt != null) {
      const modifiedRequest = request.clone({
        setHeaders: { authorization: `Bearer ${jwt}` },
      });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
