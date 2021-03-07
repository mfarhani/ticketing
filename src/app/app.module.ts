import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {NicicoTicketComponent} from './nicico-ticket/nicico-ticket.component';
import {createCustomElement} from '@angular/elements';
import {AngularMaterialModule} from './shared/angular-material/angular-material.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    NicicoTicketComponent
  ],
  entryComponents: [NicicoTicketComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule
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
