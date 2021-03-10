import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../../shared/component-base/form-base/form-base.component';
import { ITicket } from '../models/ticket/ticket.interface';
import { Ticket } from '../models/ticket/ticket.model';

@Component({
  selector: 'nicico-ticket-form',
  templateUrl: '../../shared/component-base/form-base/form-base.component.html'
})
export class TicketFormComponent
  extends FormBaseComponent<ITicket>
  implements OnInit {
  constructor() {
    super(Ticket);
  }

  ngOnInit(): void {}
}
