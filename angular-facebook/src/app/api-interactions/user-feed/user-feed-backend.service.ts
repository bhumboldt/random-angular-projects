import { Observable, of } from 'rxjs';
import { HttpBaseService } from './../http-base/http-base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFeedBackendService {

  constructor(
    private http: HttpBaseService
  ) { }

  getUserFeed(userId: string): Observable<any> {
    return of({
      feed_items: [
        {
          id: 'abc',
          image: '',
          description: '',
          time_posted_at: new Date(),
          poster: {
            first_name: '',
            last_name: '',
            profile_photo: ''
          }
        }
      ]
    });
  }
}
