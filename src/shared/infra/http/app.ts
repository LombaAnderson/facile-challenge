import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import { createConnection } from '@shared/infra/database';
import { router } from '@shared/infra/http/routes';

createConnection();

import '../../container';
import { AppError } from '../errors/AppError';



const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(AppError.middleware);

export { app };
