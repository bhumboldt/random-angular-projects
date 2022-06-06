import { Injectable } from '@angular/core';
import { AuthBackendService } from '../api-interactions/auth/auth-backend.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  constructor(private authBackendService: AuthBackendService) { }

  login(email: string, password: string): Promise<any> {
    return this.authBackendService.authorize(email, password).toPromise();
  }
}
