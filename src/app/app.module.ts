import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarModule } from './shared/navbar';
import { AboutComponent } from './about';
import { HomeModule } from './home';
import { AdminModule } from './admin';
import { APP_ROUTES } from './app.routes';
import { DygraphsModule } from './dygraphs';

@NgModule(
  {
    // `RouterModule.forRoot([])` is there to provide Router providers and directives to our application
    // additionaly we can use this configure app level routes if any, as of now we have []
    imports: [ BrowserModule, RouterModule.forRoot(APP_ROUTES), NavbarModule, HomeModule, AdminModule, DygraphsModule ],

    providers: [
      // Use custom ng module factory loader
      // { provide: SomeClass, useClass: SomeClassImpl }
    ],

    // We need to declare components which are part of (created for) this module
    declarations: [ AppComponent, AboutComponent ],

    // Components that we need to bootstrap when the module is loaded
    bootstrap: [ AppComponent ]
  }
)
export class LabsApplicationModule {
  // This is another way to Bootstrap modules
  // Either use this hook or provide component in `@NgModule.bootstrap` as above
  /* ngDoBootstrap(applicationRef: ApplicationRef) {
     applicationRef.bootstrap(AppComponent);
   }
   */
}
