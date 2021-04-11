export interface ITextEditorState {
  textAlign: 'right' | 'left';
  listType: 'bulleted' | 'numbered' | undefined;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  fontSize: number;
  color: string;
}

export class TextEditorState implements ITextEditorState {

  constructor(
    public textAlign: 'right' | 'left' = 'right',
    // tslint:disable-next-line:no-unnecessary-initializer
    public listType: 'bulleted' | 'numbered' | undefined = undefined,
    public bold: boolean = false,
    public italic: boolean = false,
    public underline: boolean = false,
    public fontSize: number = 13,
    public color: string = ''
  ) {
  }
}

export class TextEditorContent {

  private TEXT: string;
  public states: ITextEditorState[];

  constructor(
    text?: string
  ) {
    this.TEXT = text || '';
    this.states = [];
  }

  public get linedText(): { index: number, text: string, state: ITextEditorState }[] {
    return this.TEXT.split(/\n/).map((value, idx) => {
      return { index: idx, text: value, state: this.states[idx] };
    }) || [];
  }

  public set text(value: string) {
    this.TEXT = value;
    const state = new Array<ITextEditorState>();
    value.split(/\n/)
      .forEach((val, idx) => {
        state.push(this.states[idx] || new TextEditorState());
      });
  }

}
