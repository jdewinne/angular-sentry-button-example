import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';

import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://xxxxxx@sentry.io/123"
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    console.error(error);
    window.location.reload();
  }
}

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ClickMeComponent
  ],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/