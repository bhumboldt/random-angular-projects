import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryComponent } from './story/story.component';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    UserFeedComponent,
    FeedItemComponent,
    StoryListComponent,
    StoryComponent,
    ContactsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
