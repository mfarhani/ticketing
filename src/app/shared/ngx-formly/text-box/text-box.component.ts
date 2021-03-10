import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    console.log(this);
  }
}
