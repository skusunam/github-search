/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GithubsearchService } from './githubsearch.service';

describe('Service: Githubsearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubsearchService]
    });
  });

  it('should ...', inject([GithubsearchService], (service: GithubsearchService) => {
    expect(service).toBeTruthy();
  }));
});
