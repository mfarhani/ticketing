import {NgModule} from '@angular/core';
import {AngularMaterialModule} from './angular-material/angular-material.module';

@NgModule({
  imports: [
    AngularMaterialModule
  ],
  exports: [AngularMaterialModule]
})
export class SharedModule {

}
