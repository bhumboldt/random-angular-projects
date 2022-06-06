import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(private httpClient: HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.apiRoute}${endpoint}`, {
      headers: this.getOptions()
    });
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.httpClient.post(`${environment.apiRoute}${endpoint}`, data, {
      headers: this.getOptions()
    });
  }

  put(endpoint: string, data: any): Observable<any> {
    return this.httpClient.put(`${environment.apiRoute}${endpoint}`, data, {
      headers: this.getOptions()
    });
  }

  delete(endpoint: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiRoute}${endpoint}`, {
      headers: this.getOptions()
    });
  }

  private getOptions(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append(`Content-Type`, 'application/json');
    return headers;
  }
}
