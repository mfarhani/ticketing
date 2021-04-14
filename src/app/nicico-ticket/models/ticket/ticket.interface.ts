import { IBaseModel } from '../../../core/base-models/contracts/base-model.interface';
import { TicketStatusCodeEnum } from '../../enums/ticket-status-code.enum';

export interface ITicket extends IBaseModel {
  title?: string;
  description?: string;
  priority?: string;
  createDate?: string;
  status?: string;
  statusCode?: TicketStatusCodeEnum;
}
