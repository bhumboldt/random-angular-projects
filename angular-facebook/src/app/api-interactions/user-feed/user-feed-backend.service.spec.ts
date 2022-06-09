import { TestBed } from '@angular/core/testing';

import { UserFeedBackendService } from './user-feed-backend.service';

describe('UserFeedBackendService', () => {
  let service: UserFeedBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFeedBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
