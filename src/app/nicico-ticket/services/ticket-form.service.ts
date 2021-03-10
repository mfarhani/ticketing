import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBaseService } from '../../core/services/service/form-base.service';
import { TicketMapperService } from '../models/ticket/ticket-mapper.service';
import { ITicket } from '../models/ticket/ticket.interface';

@Injectable({ providedIn: 'root' })
export class TicketFormService extends FormBaseService<ITicket> {
  constructor(http: HttpClient, mapper: TicketMapperService) {
    super('api/entity-url', http, mapper, 'Ticket');
  }
}
