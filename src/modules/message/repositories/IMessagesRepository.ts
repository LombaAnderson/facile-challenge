import { ICreateMessageDTO } from '@modules/message/dtos/ICreateMessageDTO';
import { Message } from '@modules/message/entities/Message';

interface IMessagesRepository {
  findById(id: number): Promise<Message>;
  create(data: ICreateMessageDTO): Promise<Message>;
}

export { IMessagesRepository };
