import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { IComment } from './comment.interface';

export class Comment implements IComment {
  constructor(public id?: number, public message?: string) {}

  public toString(): string {
    return this.message || '';
  }

  public get entityName(): string {
    return 'comment';
  }

  public get fields(): FormlyFieldConfig[] {
    return Comment.fields;
  }

  public static get fields(): FormlyFieldConfig[] {
    const fields: FormlyFieldConfig[] = [
      {
        key: 'textEditor',
        type: 'nicico-text-editor',
        templateOptions: {
          label: 'Comment',
          placeholder: 'placeholder',
          description: 'deactivate',
          required: true
        }
      }
    ];
    return fields;
  }

  get options(): FormlyFormOptions {
    return {};
  }
}
