import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { IBaseModel } from '../../../core/base-models/contracts/base-model.interface';

@Component({
  selector: 'nicico-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends FieldType implements OnInit {
  constructor() {
    super();
  }

  // @ts-ignore
  formControl: FormControl;

  ngOnInit(): void {
    console.log(this.formControl.errors);
  }

  compareOption(p1: IBaseModel, p2: IBaseModel): boolean {
    return p1.id === p2.id;
  }
}
