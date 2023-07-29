import { TestBed } from '@angular/core/testing';

import { ModyguardGuard } from './modyguard.guard';

describe('ModyguardGuard', () => {
  let guard: ModyguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ModyguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
