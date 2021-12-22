import { CreateMessageController } from '@modules/message/useCases/createMessage/CreateMessageController';
import { ListMessagesByIdController } from '@modules/message/useCases/ListMessages/ListMessagesByIdController';
import { Router } from 'express';

const encryptsRouter = Router();

const listMessagesByIdController = new ListMessagesByIdController();
const createMessageController = new CreateMessageController();

encryptsRouter.get('/:id', listMessagesByIdController.handle);
encryptsRouter.post('/', createMessageController.handle);

export { encryptsRouter };
