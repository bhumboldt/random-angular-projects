import { Observable, of } from 'rxjs';
import { HttpBaseService } from './../http-base/http-base.service';
import { Injectable } from '@angular/core';
import { FeedItem } from 'src/app/models/FeedItem';

@Injectable({
  providedIn: 'root'
})
export class UserFeedBackendService {

  constructor(
    private http: HttpBaseService
  ) { }

  getUserFeedItems(userId: string): Observable<{ feed_items: Array<FeedItem>; }> {
    return of({
      feed_items: [
        {
          id: 'abc',
          image: 'http://placehold.jp/1000x1000.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/100x100.png'
          }
        },
        {
          id: 'abc',
          image: 'http://placehold.jp/1000x1000.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/100x100.png'
          }
        },
        {
          id: 'abc',
          image: 'http://placehold.jp/1000x1000.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/100x100.png'
          }
        },
        {
          id: 'abc',
          image: 'http://placehold.jp/1000x1000.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/100x100.png'
          }
        },
        {
          id: 'abc',
          image: 'http://placehold.jp/1000x1000.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/100x100.png'
          }
        },
        {
          id: 'abc',
          image: 'http://placehold.jp/1000x1000.png',
          description: 'Hey this is a description for an activity',
          time_posted_at: new Date(),
          poster: {
            first_name: 'Brandon',
            last_name: 'Humboldt',
            profile_photo: 'http://placehold.jp/100x100.png'
          }
        }
      ]
    });
  }
}
