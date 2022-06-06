import { Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base/http-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthBackendService {

  constructor(private httpService: HttpBaseService) { }

  authorize(email: string, password: string): Observable<any> {
    return this.httpService.post(`login`, { email, password });
  }
}
