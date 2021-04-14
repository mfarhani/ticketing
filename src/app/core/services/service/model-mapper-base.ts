import { Type } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { IBaseModel } from '../../base-models/contracts/base-model.interface';
import { isPresent, Optional } from '../../type-guards/optional';
import { IModelMapper } from '../contract/model-mapper.interface';

export abstract class ModelMapperBase<T extends IBaseModel>
  implements IModelMapper<T> {
  private readonly fields: Optional<FormlyFieldConfig[]>;

  protected constructor(public modelClass: Type<T>) {
    this.fields = new this.modelClass().fields;
  }

  public abstract mapAssociations(json: T, model: T): void;

  public toModel(json: T): T {
    const model = new this.modelClass();
    this.mapPrimitiveProperties(json, model);
    this.mapAssociations(json, model);
    return model;
  }

  protected mapPrimitiveProperties(json: T, model: T): void {
    model.id = json.id;
    if (isPresent(this.fields)) {
      for (const pr of this.fields) {
        if (pr.key) {
          // @ts-ignore
          model[pr.key] = json[pr.key];
        }
      }
    }
  }
}
