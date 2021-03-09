import {NgModule} from '@angular/core';
import {SharedCommonModule} from './shared-common/shared-common.module';
import {SharedLibModule} from './shared-lib/shared-lib.module';

@NgModule({
  imports: [
    SharedLibModule,
    SharedCommonModule
  ],
  exports: [
    SharedLibModule,
    SharedCommonModule
  ]
})
export class SharedModule {

}
