import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListBaseService } from '../../core/services/service/list-base.service';
import { TicketMapperService } from '../models/ticket/ticket-mapper.service';
import { ITicket } from '../models/ticket/ticket.interface';

@Injectable({ providedIn: 'root' })
export class TicketListService extends ListBaseService<ITicket> {
  constructor(http: HttpClient, mapper: TicketMapperService) {
    super('./assets/mocks/tickets.json', http, mapper, 'ticket');
  }
}
