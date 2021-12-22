import { CreateMessageUseCase } from '@modules/message/useCases/createMessage/CreateMessageUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateMessageController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createMessageUseCase = container.resolve(CreateMessageUseCase);
    const message = await createMessageUseCase.execute({ encripted_name: name });
    return response.status(201).json(message);
  }
}
export { CreateMessageController };
