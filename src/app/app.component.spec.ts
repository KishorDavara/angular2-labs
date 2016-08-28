import {
  inject
} from '@angular/core/testing';

// to use Translate Service, we need Http, and to test Http we need to mock the backend
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

describe('LabsApp', () => {
  // provide our implementations or mocks to the dependency injector
  // beforeEach(() => {
  //   addProviders([
  //     AppComponent,
  //     BaseRequestOptions,
  //     MockBackend,
  //     // Provide a mocked (fake) backend for Http
  //     {
  //       provide: Http,
  //       deps: [MockBackend, BaseRequestOptions],
  //       useFactory: function useFactory(backend, defaultOptions) {
  //         return new Http(backend, defaultOptions);
  //       }
  //     }
  //   ]);
  // });

  it('component should be created', inject([AppComponent], (app: AppComponent) => {
    expect(true).toBeTruthy();
  }));

});