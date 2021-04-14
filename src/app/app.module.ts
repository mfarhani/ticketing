import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChatComponent } from './nicico-ticket/chat/chat.component';
import { NicicoTicketComponent } from './nicico-ticket/nicico-ticket.component';
import { TicketFormComponent } from './nicico-ticket/ticket-form/ticket-form.component';
import { CommentCardComponent } from './nicico-ticket/ticket-tracking/comment-card/comment-card.component';
import { CommentComponent } from './nicico-ticket/ticket-tracking/comment/comment.component';
import { TicketCardComponent } from './nicico-ticket/ticket-tracking/ticket-list/ticket-card/ticket-card.component';
import { TicketListComponent } from './nicico-ticket/ticket-tracking/ticket-list/ticket-list.component';
import { TicketTrackingComponent } from './nicico-ticket/ticket-tracking/ticket-tracking.component';
import { SharedModule } from './shared/shared.module';

export function createTranslateLoader(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    NicicoTicketComponent,
    TicketFormComponent,
    ChatComponent,
    TicketTrackingComponent,
    CommentComponent,
    CommentCardComponent,
    TicketListComponent,
    TicketCardComponent
  ],
  entryComponents: [NicicoTicketComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(NicicoTicketComponent, {
      injector: this.injector
    });
    customElements.define('nicico-ticket', el);
  }
}
