import { IBaseModel } from '../contracts/base-model.interface';

export interface Page<T extends IBaseModel> {
  data: T[];
  totalCount: number;
}
