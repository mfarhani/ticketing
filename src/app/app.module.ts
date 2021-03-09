import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {NicicoTicketComponent} from './nicico-ticket/nicico-ticket.component';
import {createCustomElement} from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NicicoTicketComponent
  ],
  entryComponents: [NicicoTicketComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
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
