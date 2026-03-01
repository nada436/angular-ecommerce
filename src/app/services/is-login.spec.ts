import { TestBed } from '@angular/core/testing';

import { IsLogin } from './is-login';

describe('IsLogin', () => {
  let service: IsLogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
