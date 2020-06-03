/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { App.serviceService } from './app.service.service';

describe('Service: App.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [App.serviceService]
    });
  });

  it('should ...', inject([App.serviceService], (service: App.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
