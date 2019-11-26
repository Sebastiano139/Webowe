/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MustMatchService } from './mustMatch.service';

describe('Service: MustMatch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MustMatchService]
    });
  });

  it('should ...', inject([MustMatchService], (service: MustMatchService) => {
    expect(service).toBeTruthy();
  }));
});
