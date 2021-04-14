import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IBaseModel } from '../../base-models/contracts/base-model.interface';
import { IModelMapper } from '../contract/model-mapper.interface';
import { BaseService } from './base.service';

export abstract class ListBaseService<
  T extends IBaseModel
> extends BaseService<T> {
  protected constructor(
    baseUrl: string,
    http: HttpClient,
    protected mapper: IModelMapper<T>,
    protected responseKey: string
  ) {
    super(baseUrl, http, mapper, responseKey);
  }

  public readAll(): Observable<HttpResponse<T[]>> {
    return this.http.get<T[]>(this.baseUrl, { observe: 'response' });
  }
}
