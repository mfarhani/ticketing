import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nicico-ticket',
  templateUrl: './nicico-ticket.component.html',
  styleUrls: ['./nicico-ticket.component.scss']
})
export class NicicoTicketComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onTicketClick(): void {
    alert('ticket web component works!');
  }
}
