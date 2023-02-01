import { TestBed } from '@angular/core/testing';

import { ControlappService } from './controlapp.service';

describe('ControlappService', () => {
  let service: ControlappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
