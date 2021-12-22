import { ICreateMessageDTO } from '@modules/message/dtos/ICreateMessageDTO';
import { Message } from '@modules/message/entities/Message';
import { getRepository, Repository } from 'typeorm';

import { IMessagesRepository } from '../IMessagesRepository';

class MessagesRepository implements IMessagesRepository {
  private repository: Repository<Message>;

  constructor() {
    this.repository = getRepository(Message);
  }

  public async findById(id: number): Promise<Message> {
    const encrypt = await this.repository.findOne(id);
    return encrypt;
  }

  public async create({ encripted_name }: ICreateMessageDTO): Promise<Message> {
    const repository = this.repository.create({
      encrypted_name: encripted_name,
    });

    const encrypt = await this.repository.save(repository);
    return encrypt;
  }
}

export { MessagesRepository };
