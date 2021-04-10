import { Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { IBaseModel } from '../../../core/base-models/contracts/base-model.interface';
import { Optional } from '../../../core/type-guards/optional';

export class FormBaseComponent<T extends IBaseModel> {
  public model: Optional<T>;
  public form = new FormGroup({});
  public readonly options: Optional<FormlyFormOptions> = {};
  public readonly fields: Optional<FormlyFieldConfig[]>;
  public readonly entityName: Optional<string>;
  public submitTitle: string;

  constructor(protected modelClass: Type<T>) {
    const tempModel = new modelClass();
    this.entityName = tempModel.entityName;
    this.fields = tempModel.fields;
    this.options = tempModel.options;
    this.submitTitle = tempModel.submitTitle || 'nicico.ticket.submit';
  }
}
