import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

export interface IBaseModel {
  readonly fields?: FormlyFieldConfig[];
  readonly options?: FormlyFormOptions;
  readonly entityName?: string;
  readonly submitTitle?: string;
  id?: number | string;

  toString(): string;
}
