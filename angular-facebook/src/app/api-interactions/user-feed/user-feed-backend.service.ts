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

  getUserFeedItems(userId: string): Observable<any> {
    return of({
      feed_items: [
        {
          id: 'abc',
          image: 'http://placehold.jp/400x400.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/40x40.png'
          }
        },
        {
          id: 'abc',
          image: 'http://placehold.jp/400x400.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/40x40.png'
          }
        },
        {
          id: 'abc',
          image: 'http://placehold.jp/400x400.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/40x40.png'
          }
        },
        {
          id: 'abc',
          image: 'http://placehold.jp/400x400.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/40x40.png'
          }
        },
        {
          id: 'abc',
          image: 'http://placehold.jp/400x400.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/40x40.png'
          }
        },
        {
          id: 'abc',
          image: 'http://placehold.jp/400x400.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/40x40.png'
          }
        }
      ]
    });
  }
}
