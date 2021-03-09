import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedLibModule } from '../shared-lib/shared-lib.module';
import { CustomComponentDirective } from './custom-component/custom-component.directive';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';

@NgModule({
  declarations: [DynamicMenuComponent, CustomComponentDirective],
  imports: [CommonModule, RouterModule, SharedLibModule, TranslateModule],
  exports: [DynamicMenuComponent, CustomComponentDirective]
})
export class SharedCommonModule {}
