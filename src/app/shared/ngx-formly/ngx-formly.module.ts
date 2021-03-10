import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { SharedCommonModule } from '../shared-common/shared-common.module';
import { SharedLibModule } from '../shared-lib/shared-lib.module';
import { SelectComponent } from './select/select.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

@NgModule({
  declarations: [TextBoxComponent, SelectComponent, TextEditorComponent],
  imports: [
    CommonModule,
    SharedLibModule,
    SharedCommonModule,
    FormlyModule.forRoot({
      types: [
        { name: 'text', component: TextBoxComponent },
        { name: 'nicico-select', component: SelectComponent },
        { name: 'nicico-text-editor', component: TextEditorComponent }
      ]
    }),
    FormlyMaterialModule
  ],
  exports: [FormlyModule, FormlyMaterialModule]
})
export class NgxFormlyModule {}
