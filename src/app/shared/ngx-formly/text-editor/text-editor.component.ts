import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FieldType } from '@ngx-formly/core';

import { TextFormatEnum } from './text-format.enum';
import { ITextEditorState, TextEditorState, TextEditorContent } from './text-editor.config';

@Component({
  selector: 'nicico-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent extends FieldType implements OnInit {

  @ViewChild('textEditor') textEditor!: ElementRef;
  @ViewChild('colorPicker') colorPicker!: ElementRef;
  public textEditorState: ITextEditorState = new TextEditorState();
  textEditorContent: TextEditorContent;
  showPopup = false;
  public files: FileList | any;

  constructor() {
    super();
    this.textEditorContent = new TextEditorContent();
  }

  ngOnInit(): void {
    console.log(this);
  }

  formatText(formatType: number): void {
    let startPos = this.textEditor.nativeElement.selectionStart;
    let endPos = this.textEditor.nativeElement.selectionEnd;
    let textValue: string = this.textEditor.nativeElement.value;
    if (startPos === endPos) {
      startPos = 0;
      endPos = textValue.length;
    }
    const selectedCollection = textValue.substring(startPos, endPos).split(/\n/);
    let selectedText = '';

    switch (formatType) {

      case TextFormatEnum.alignLeft:
        this.textEditorState.textAlign = 'left';
        break;

      case TextFormatEnum.alignRight:
        this.textEditorState.textAlign = 'right';
        break;

      case TextFormatEnum.bold:
        this.textEditorState.bold = !this.textEditorState.bold;
        break;

      case TextFormatEnum.italic:
        this.textEditorState.italic = !this.textEditorState.italic;
        break;

      case TextFormatEnum.underlined:
        this.textEditorState.underline = !this.textEditorState.underline;
        break;

      case TextFormatEnum.listBulleted:

        this.textEditorState.listType =
          this.textEditorState.listType !== 'bulleted' ? ((): 'bulleted' => {
            if (selectedCollection.length > 0) {
              selectedText = selectedCollection.map(a => '\u2022  ' + a).join('\n');
            }
            return 'bulleted';
          })() : ((): undefined => {
            if (selectedCollection.length > 0) {
              selectedText = selectedCollection.map(a => a.replace('\u2022', '').trim()).join('\n');
            }
            return undefined;
          })();

        textValue = textValue.replace(textValue.slice(startPos, endPos), '');
        this.textEditor.nativeElement.value = [
          textValue.slice(0, startPos),
          selectedText,
          textValue.slice(startPos)
        ].join('');

        break;

      case TextFormatEnum.listNumbered:

        this.textEditorState.listType =
          this.textEditorState.listType !== 'numbered' ? ((): 'numbered' => {
            if (selectedCollection.length > 0) {
              selectedText = selectedCollection.map((val, idx) => `${idx + 1}- ${val}`).join('\n');
            }
            return 'numbered';
          })() : ((): undefined => {
            if (selectedCollection.length > 0) {
              selectedText = selectedCollection.map(a => a.replace(/^\d+-/, '').trim()).join('\n');
            }
            return undefined;
          })();

        textValue = textValue.replace(textValue.slice(startPos, endPos), '');
        this.textEditor.nativeElement.value = [
          textValue.slice(0, startPos),
          selectedText,
          textValue.slice(startPos)
        ].join('');

        break;

      case TextFormatEnum.size:
        break;

      case TextFormatEnum.color:
        this.colorPicker.nativeElement.click();
        break;
    }
  }

  increaseSize(): void {
    this.textEditorState.fontSize = this.textEditorState.fontSize + 1;
  }

  decreaseSize(): void {
    this.textEditorState.fontSize = this.textEditorState.fontSize - 1;
  }

  filePickerChanged(files: FileList | any): void {
    if (files && files instanceof FileList) {
      this.files = files;
    }
  }
}
