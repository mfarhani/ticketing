import { IBaseModel } from '../../../core/base-models/contracts/base-model.interface';

export interface IComment extends IBaseModel {
  message?: string;
}
