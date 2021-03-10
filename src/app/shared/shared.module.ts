import { NgModule } from '@angular/core';
import { NgxFormlyModule } from './ngx-formly/ngx-formly.module';
import { SharedCommonModule } from './shared-common/shared-common.module';
import { SharedLibModule } from './shared-lib/shared-lib.module';

@NgModule({
  imports: [SharedLibModule, SharedCommonModule, NgxFormlyModule],
  exports: [SharedLibModule, SharedCommonModule, NgxFormlyModule]
})
export class SharedModule {}
