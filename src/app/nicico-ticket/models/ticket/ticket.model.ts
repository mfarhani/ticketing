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
        key: 'ticket-group',
        type: 'nicico-select',
        templateOptions: {
          label: 'nicico.ticket.group',
          placeholder: 'placeholder',
          description: 'deactivate',
          required: true
        }
      },
      {
        key: 'ticket-group-type',
        type: 'nicico-select',
        templateOptions: {
          label: 'nicico.ticket.groupType',
          placeholder: 'placeholder',
          description: 'deactivate',
          required: true
        }
      },
      {
        key: 'ticket-type',
        type: 'nicico-select',
        templateOptions: {
          label: 'nicico.ticket.type',
          placeholder: 'placeholder',
          description: 'deactivate',
          required: true
        }
      },
      {
        key: 'ticket-priority',
        type: 'nicico-select',
        templateOptions: {
          label: 'nicico.ticket.priority',
          placeholder: 'placeholder',
          description: 'deactivate',
          required: true
        }
      },
      {
        key: 'ticket-topic',
        type: 'text',
        templateOptions: {
          label: 'nicico.ticket.topic',
          placeholder: 'nicico.ticket.topic',
          description: 'deactivate',
          required: true
        }
      },
      {
        key: 'description',
        type: 'nicico-text-editor',
        templateOptions: {
          label: 'nicico.ticket.description',
          placeholder: 'nicico.ticket.description',
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
