import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nicico-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent extends FieldType implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this);
  }
}
