import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nicico-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent extends FieldType implements OnInit {
  constructor() {
    super();
  }

  // @ts-ignore
  formControl: FormControl;

  ngOnInit(): void {
    console.log(this);
  }

  change() {
    console.log(this);
  }
}
