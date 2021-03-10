import { Component, Input, OnInit } from '@angular/core';
import { ConfirmDialogConfig } from '@app/shared/component-base/confirm-dialog/confirm-dialog-config';

@Component({
  selector: 'nicico-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() config?: ConfirmDialogConfig = {};

  constructor() {}

  ngOnInit(): void {}
}
