import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../../../shared/component-base/form-base/form-base.component';
import { IComment } from '../../models/comment/comment.interface';

@Component({
  selector: 'nicico-comment',
  templateUrl:
    '../../../shared/component-base/form-base/form-base.component.html'
})
export class CommentComponent
  extends FormBaseComponent<IComment>
  implements OnInit {
  constructor() {
    super(Comment);
  }

  ngOnInit(): void {}
}
