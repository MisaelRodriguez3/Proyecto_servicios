import { TestBed } from '@angular/core/testing';

import { ServcioRestService } from './servcio-rest.service';

describe('ServcioRestService', () => {
  let service: ServcioRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServcioRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
