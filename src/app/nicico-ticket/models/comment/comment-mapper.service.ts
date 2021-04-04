import { Injectable } from '@angular/core';
import { ModelMapperBase } from '../../services/model-mapper-base';
import { IComment } from './comment.interface';

@Injectable({ providedIn: 'root' })
export class CommentMapperService extends ModelMapperBase<IComment> {
  constructor() {
    super(Comment);
  }

  mapAssociations(json: IComment, model: IComment): void {}
}
