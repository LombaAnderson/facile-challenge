import { IDecryptMessageDTO } from '@modules/message/dtos/IDecryptMessageDTO';
import { IMessagesRepository } from '@modules/message/repositories/IMessagesRepository';
import { Crypt } from '@supports/Cryptr';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListMessagesByIdUseCase {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  public async execute(id: number): Promise<IDecryptMessageDTO> {
    const encryptedName = await this.messagesRepository.findById(id);

    if (!encryptedName) {
      return undefined;
    }

    const decryptedName = Crypt.decrypt(encryptedName.encrypted_name);

    return {
      id: encryptedName.id,
      encripted_name: decryptedName,
    };
  }
}

export { ListMessagesByIdUseCase };
