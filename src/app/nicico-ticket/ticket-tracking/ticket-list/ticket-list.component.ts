import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITicket } from '../../models/ticket/ticket.interface';
import { TicketListService } from '../../services/ticket-list.service';

@Component({
  selector: 'nicico-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  public ticketList: ITicket[] = [];

  constructor(private ticketListService: TicketListService) {}

  ngOnInit(): void {
    this.ticketListService
      .readAll()
      .subscribe((resp: HttpResponse<ITicket[]>) => {
        if (resp.body) {
          resp.body.map((item) => {
            this.ticketList.push(item);
          });
        }
      });
  }
}
