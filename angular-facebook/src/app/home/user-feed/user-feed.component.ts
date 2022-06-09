import { Observable } from 'rxjs';
import { UserFeedStoreService } from './../../data-stores/user-feed/user-feed-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss']
})
export class UserFeedComponent implements OnInit {
  feedItems: Observable<Array<any>>;

  constructor(
    private userFeedStore: UserFeedStoreService
  ) {
    this.feedItems = this.userFeedStore.getFeedItems();
  }

  ngOnInit(): void {
    this.userFeedStore.initFeedItems('');
  }

}
