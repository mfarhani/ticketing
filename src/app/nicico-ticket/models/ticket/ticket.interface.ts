import { IBaseModel } from '../../../core/base-models/contracts/base-model.interface';

export interface ITicket extends IBaseModel {
  title?: string;
  description?: string;
}
