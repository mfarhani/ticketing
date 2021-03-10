import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBaseModel } from '../../base-models/contracts/base-model.interface';
import { Optional } from '../../type-guards/optional';
import { IModelMapper } from '../contract/model-mapper.interface';
import { BaseService } from './base.service';

export abstract class FormBaseService<
  T extends IBaseModel
> extends BaseService<T> {
  protected constructor(
    baseUrl: string,
    http: HttpClient,
    mapper: IModelMapper<T>,
    responseKey: string
  ) {
    super(baseUrl, http, mapper, responseKey);
  }

  public create(model: T): Observable<Optional<T>> {
    return this.http
      .post<T>(this.baseUrl, model, { observe: 'response' })
      .pipe(map((resp) => this.mapResponseToModel(resp)));
  }

  public read(id: number): Observable<Optional<T>> {
    return this.http
      .get<T>(`${this.baseUrl}/${id}`, { observe: 'response' })
      .pipe(map((resp) => this.mapResponseToModel(resp)));
  }

  public update(
    model: Optional<T>,
    extraUrl?: string
  ): Observable<Optional<T>> {
    return this.http
      .put<T>(`${this.baseUrl}${extraUrl ? extraUrl : ''}`, model, {
        observe: 'response'
      })
      .pipe(map((resp) => this.mapResponseToModel(resp)));
  }

  public delete(id: number | string): Observable<Optional<T>> {
    return this.http
      .delete<T>(`${this.baseUrl}/${id}`, { observe: 'response' })
      .pipe(map((resp) => this.mapResponseToModel(resp)));
  }
}
