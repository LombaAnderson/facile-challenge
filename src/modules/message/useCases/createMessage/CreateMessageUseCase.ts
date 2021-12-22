import { ICreateMessageDTO } from '@modules/message/dtos/ICreateMessageDTO';
import { IMessagesRepository } from '@modules/message/repositories/IMessagesRepository';
import { Crypt } from '@supports/Cryptr';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/infra/errors/AppError';

@injectable()
class CreateMessageUseCase {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  public async execute({ encripted_name }: ICreateMessageDTO): Promise<ICreateMessageDTO> {
    if (encripted_name === '' || encripted_name === null || encripted_name === undefined) {
      throw new AppError('O campo "name" é obrigatório', 'E_VALIDATION_FAILURE');
    }
    const encriptedName = Crypt.encrypt(encripted_name);

    const message = await this.messagesRepository.create({ encripted_name: encriptedName });

    return {
      id: String(message.id),
      encripted_name: message.encrypted_name,
    };
  }
}

export { CreateMessageUseCase };
