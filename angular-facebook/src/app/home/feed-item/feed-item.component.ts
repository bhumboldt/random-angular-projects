import { Component, Input, OnInit } from '@angular/core';
import { FeedItem } from '../../models/FeedItem';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {
  @Input()
  feedItem: FeedItem;

  constructor() { }

  ngOnInit(): void {
  }

}
