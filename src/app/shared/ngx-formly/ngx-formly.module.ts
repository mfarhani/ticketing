import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TranslateModule } from '@ngx-translate/core';
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
      validationMessages: [
        { name: 'required', message: 'nicico.error.required' }
      ],
      types: [
        { name: 'text', component: TextBoxComponent },
        { name: 'nicico-select', component: SelectComponent },
        { name: 'nicico-text-editor', component: TextEditorComponent }
      ]
    }),
    FormlyMaterialModule,
    TranslateModule
  ],
  exports: [FormlyModule, FormlyMaterialModule]
})
export class NgxFormlyModule {}
