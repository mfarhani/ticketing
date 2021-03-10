import { Injectable } from '@angular/core';
import { ModelMapperBase } from '../../services/model-mapper-base';
import { ITicket } from './ticket.interface';
import { Ticket } from './ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketMapperService extends ModelMapperBase<ITicket> {
  constructor() {
    super(Ticket);
  }

  mapAssociations(json: ITicket, model: ITicket): void {}
}
