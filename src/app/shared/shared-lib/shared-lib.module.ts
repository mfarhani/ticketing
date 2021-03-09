import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularMaterialModule} from './angular-material/angular-material.module';

@NgModule({
  declarations: [],
  imports: [AngularMaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedLibModule {
}
