import { Component, OnInit, ViewChild } from '@angular/core';
import { IconService } from '../core/services/service/icon.service';
import { DynamicMenuComponent } from '../shared/shared-common/dynamic-menu/dynamic-menu.component';

@Component({
  selector: 'nicico-ticket',
  templateUrl: './nicico-ticket.component.html',
  styleUrls: ['./nicico-ticket.component.scss']
})
export class NicicoTicketComponent implements OnInit {
  @ViewChild('menu') menu: DynamicMenuComponent = new DynamicMenuComponent();
  public show = false;
  public btnIndexes = [1, 2, 3];
  title = 'test';
  public expandBtn = false;

  constructor(private iconService: IconService) {
    iconService.registerIcons().subscribe((res) => {
      this.show = true;
    });
  }

  ngOnInit(): void {}

  changeIndex(index: number): void {
    this.expandBtn = true;
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
    this.menu.openMenu();
  }

  collapseBtn(): void {
    if (!this.menu.trigger.menuOpen) {
      this.btnIndexes = [1, 2, 3];
      this.expandBtn = false;
    }
  }
}
