import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { ITicket } from './ticket.interface';

export class Ticket implements ITicket {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string
  ) {}

  public toString(): string {
    return this.title || '';
  }

  public get entityName(): string {
    return 'ticket';
  }

  public get submitTitle(): string {
    return 'nicico.ticket.submitTicketBtn';
  }

  public get fields(): FormlyFieldConfig[] {
    return Ticket.fields;
  }

  public static get fields(): FormlyFieldConfig[] {
    const fields: FormlyFieldConfig[] = [
      {
        key: 'Select',
        type: 'nicico-select',
        templateOptions: {
          label: 'select',
          placeholder: 'placeholder',
          description: 'deactivate',
          required: true
        }
      },
      {
        key: 'Select',
        type: 'nicico-select',
        templateOptions: {
          label: 'select',
          placeholder: 'placeholder',
          description: 'deactivate',
          required: true
        }
      },
      {
        key: 'Select',
        type: 'nicico-select',
        templateOptions: {
          label: 'select',
          placeholder: 'placeholder',
          description: 'deactivate',
          required: true
        }
      },
      {
        key: 'input',
        type: 'text',
        templateOptions: {
          label: 'select',
          placeholder: 'placeholder',
          description: 'deactivate',
          required: true
        }
      },
      {
        key: 'textEditor',
        type: 'nicico-text-editor',
        templateOptions: {
          label: 'text editor',
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
