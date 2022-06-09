import { TestBed } from '@angular/core/testing';

import { UserFeedStoreService } from './user-feed-store.service';

describe('UserFeedStoreService', () => {
  let service: UserFeedStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFeedStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
