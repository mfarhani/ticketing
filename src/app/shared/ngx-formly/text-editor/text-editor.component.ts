import { Component, OnInit, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { TextFormatEnum } from './text-format.enum';

@Component({
  selector: 'nicico-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent extends FieldType implements OnInit {
  @ViewChild('textEditor') textEditor: any;

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this);
  }

  formatText(formatType: number): void {
    switch (formatType) {
      case TextFormatEnum.alignLeft:
        this.textEditor.nativeElement.style.textAlign = 'left';
        break;
      case TextFormatEnum.alignRight:
        this.textEditor.nativeElement.style.textAlign = 'right';
        break;
      case TextFormatEnum.bold:
        this.textEditor.nativeElement.style.fontWeight = 'bold';
        break;
      case TextFormatEnum.italic:
        this.textEditor.nativeElement.style.fontStyle = 'italic';
        break;
      case TextFormatEnum.underlined:
        this.textEditor.nativeElement.style.textDecoration = 'underline';
        break;
      case TextFormatEnum.listBulleted:
        this.textEditor.nativeElement.value = this.textEditor.nativeElement.value.replace(
          /\n/g,
          '\n\u2022  '
        );
        break;
      case TextFormatEnum.listNumbered:
        for (let i = 0; i <= this.textEditor.nativeElement.value.length; i++) {
          let row = 1;
          if (this.textEditor.nativeElement.value[i] === '\n') {
            this.textEditor.nativeElement.value[i] = `\n ${i.toString()}`;
            row++;
          }
        }
        break;
      case TextFormatEnum.size:
        break;
      case TextFormatEnum.color:
        break;
    }
  }
}
