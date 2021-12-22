import { ListMessagesByIdUseCase } from '@modules/message/useCases/ListMessages/ListMessagesByIdUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListMessagesByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listMessagesByIdUseCase = container.resolve(ListMessagesByIdUseCase);

    const listEncrypts = await listMessagesByIdUseCase.execute(Number(id));

    return response.status(200).json(listEncrypts);
  }
}

export { ListMessagesByIdController };
