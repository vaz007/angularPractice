import { TestBed } from '@angular/core/testing';
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
// import {HttpClient} from '@angular/common/http';

import { ApiServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  // let httpClient = HttpClient;
  // let httpTestingController = HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
  //  imports : [HttpClientTestingModule]
  }));
  
  // httpClient = TestBed.get(HttpClient);
  // httpTestingController = TestBed.get(HttpTestingController);

  it('should be created', () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);
    expect(service).toBeTruthy();
  });
});
