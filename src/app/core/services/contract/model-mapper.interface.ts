import { IBaseModel } from '../../base-models/contracts/base-model.interface';

export interface IModelMapper<T extends IBaseModel> {
  toModel(json: T): T;
}
