import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IconService } from '../core/services/service/icon.service';
import { DynamicMenuComponent } from '../shared/shared-common/dynamic-menu/dynamic-menu.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';

@Component({
  selector: 'nicico-ticket',
  templateUrl: './nicico-ticket.component.html',
  styleUrls: ['./nicico-ticket.component.scss']
})
export class NicicoTicketComponent implements OnInit {
  @ViewChild('menu') menu: DynamicMenuComponent = new DynamicMenuComponent();
  public show = false;
  public btnIndexes = [1, 2, 3];
  title = 'nicico.ticket.new';
  public ticketForm = TicketFormComponent;
  public expandBtn = false;

  constructor(
    private iconService: IconService,
    private translate: TranslateService
  ) {
    iconService.registerIcons().subscribe((res) => {
      this.show = true;
    });
    this.iconService.registerIcons();
    this.translate.addLangs(['fa']);
    this.translate.setDefaultLang('fa');
    const browserLang = translate.getBrowserLang();
    this.translate.use(browserLang.match(/fa/) ? browserLang : 'fa');
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
