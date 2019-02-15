import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
    <button (click)="onClickMe($event)">Throw an error! .. Click me!</button>
    {{clickMessage}}`
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe(event: any) {
    this.clickMessage = (`Sending error to Sentry.io`);
    this.clickMessage.somerror();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/