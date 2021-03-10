import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'nicico-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.scss']
})
export class DynamicMenuComponent implements AfterViewInit {
  // @ts-ignore
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Input() title = '';
  @Input() entryComponent: any;
  @Output() menuClosed: EventEmitter<void> = new EventEmitter<void>();
  @Output() closeClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngAfterViewInit(): void {
    this.trigger.menuClosed.subscribe(() => {
      this.menuClosed.emit();
    });
  }

  openMenu(): void {
    this.trigger.openMenu();
  }

  closeMenu(): void {
    this.trigger.closeMenu();
  }

  onHeaderClick(): void {}

  close(): void {
    this.closeClick.emit();
  }
}
