import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedCommonModule } from '../shared-common/shared-common.module';
import { SharedLibModule } from '../shared-lib/shared-lib.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
  entryComponents: [],
  imports: [CommonModule, SharedLibModule, SharedCommonModule],
  exports: []
})
export class ComponentBaseModule {}
