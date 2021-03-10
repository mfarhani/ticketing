import { HttpClient, HttpResponse } from '@angular/common/http';
import { IBaseModel } from '../../base-models/contracts/base-model.interface';
import { Optional, toOptional } from '../../type-guards/optional';
import { IModelMapper } from '../contract/model-mapper.interface';

export abstract class BaseService<T extends IBaseModel> {
  protected constructor(
    protected baseUrl: string,
    protected http: HttpClient,
    protected mapper: IModelMapper<T>,
    protected responseKey: string
  ) {}

  protected mapResponseToModel(resp: HttpResponse<T>): Optional<T> {
    if (resp && resp.body) {
      return this.mapper.toModel(resp.body);
    } else {
      return undefined;
    }
  }

  protected mapResponseToArrayModel(resp: HttpResponse<T[]>): Optional<T[]> {
    const result: T[] = [];
    if (resp.body) {
      const index: number = Object.keys(resp.body).indexOf(this.responseKey);
      if (index >= 0) {
        Object.entries(resp.body).map((data, i) => {
          if (i === index) {
            const model = this.mapper.toModel(data[1]);
            result.push(model);
          }
        });
      }
    }
    return toOptional(result);
  }
}
