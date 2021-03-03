import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {NicicoTicketComponent} from './nicico-ticket/nicico-ticket.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    NicicoTicketComponent
  ],
  entryComponents: [NicicoTicketComponent],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const el = createCustomElement(NicicoTicketComponent, {injector: this.injector});
    customElements.define('nicico-ticket', el);
  }
}
