import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IconService} from '../core/services/service/icon.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nicico-ticket',
  templateUrl: './nicico-ticket.component.html',
  styleUrls: ['./nicico-ticket.component.scss']
})
export class NicicoTicketComponent implements OnInit {
  public show = false;
  public btnIndexes = [1, 2, 3];

  constructor(private iconService: IconService) {
    iconService.registerIcons().subscribe(res => {
      this.show = true;
    });
  }

  ngOnInit(): void {
  }

  onTicketClick(): void {
    alert('ticket web component works!');
  }

  changeIndex(index: number): void {
    switch (index) {
      case 1:
        this.btnIndexes = [1, 2, 3];
        break;
      case 2:
        this.btnIndexes = [3, 1, 2];
        break;
      case 3:
        this.btnIndexes = [2, 3, 1];
        break;
    }
  }
}
