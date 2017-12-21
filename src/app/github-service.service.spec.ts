import {getTestBed, inject, TestBed} from '@angular/core/testing';

import {GithubService} from './github-service.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

let injector;
let httpMock;

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([GithubService], (service: GithubService) => {
    service.getResult().subscribe(res => {
      expect(res).toEqual(18);
    });

    const req = httpMock.expectOne('https://us-central1-exquisite-corpse-2.cloudfunctions.net/square');
    expect(req.request.method).toBe('POST');
    req.flush(36);
  }));
});
