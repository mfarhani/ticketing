import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DynamicMenuComponent} from './dynamic-menu/dynamic-menu.component';
import {SharedLibModule} from '../shared-lib/shared-lib.module';
import {CustomComponentDirective} from './custom-component/custom-component.directive';

@NgModule({
  declarations: [DynamicMenuComponent, CustomComponentDirective],
  imports: [CommonModule, RouterModule, SharedLibModule],
  exports: [DynamicMenuComponent, CustomComponentDirective]
})
export class SharedCommonModule {
}
