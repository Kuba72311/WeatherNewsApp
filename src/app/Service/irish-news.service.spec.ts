import { TestBed } from '@angular/core/testing';

import { IrishNewsService } from './irish-news.service';

describe('IrishNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IrishNewsService = TestBed.get(IrishNewsService);
    expect(service).toBeTruthy();
  });
});
