import { UserFeedBackendService } from './../../api-interactions/user-feed/user-feed-backend.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FeedItem } from '../../models/FeedItem';

@Injectable({
  providedIn: 'root'
})
export class UserFeedStoreService {

  private _feedItems = new BehaviorSubject<Array<FeedItem>>([]);
  public feedItems$ = this._feedItems.asObservable();

  constructor(
    private userFeedBackendService: UserFeedBackendService
  ) { }

  initFeedItems(userId: string) {
    this.userFeedBackendService.getUserFeedItems(userId).subscribe(x => this._feedItems.next(x.feed_items), err => console.error(err));
  }

  getFeedItems(): Observable<Array<FeedItem>> {
    return this.feedItems$;
  }
}
