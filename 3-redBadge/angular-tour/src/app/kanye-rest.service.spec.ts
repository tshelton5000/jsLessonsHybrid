import { TestBed } from '@angular/core/testing';

import { KanyeRestService } from './kanye-rest.service';

describe('KanyeRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KanyeRestService = TestBed.get(KanyeRestService);
    expect(service).toBeTruthy();
  });
});
