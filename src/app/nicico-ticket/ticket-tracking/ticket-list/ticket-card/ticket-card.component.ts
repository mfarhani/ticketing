import { Component, Input, OnInit } from '@angular/core';
import { ITicket } from '../../../models/ticket/ticket.interface';

@Component({
  selector: 'nicico-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {
  @Input() ticket: ITicket = {};

  constructor() {}

  ngOnInit(): void {}

  selectTicket(): void {}
}
