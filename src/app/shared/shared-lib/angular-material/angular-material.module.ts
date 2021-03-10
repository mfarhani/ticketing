import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule
  ]
})
export class AngularMaterialModule {}
