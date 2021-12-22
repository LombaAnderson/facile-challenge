import { Router } from 'express';

import { encryptsRouter } from '@shared/infra/http/routes/encryptsRouter';

const router = Router();

router.use('/encripts', encryptsRouter);

export { router };
