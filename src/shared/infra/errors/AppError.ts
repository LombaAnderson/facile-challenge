import { NextFunction, Request, Response } from 'express';

class AppError {
  public readonly code: string;

  public readonly message: string;

  public readonly statusCode: number;

  public constructor(message: string, code = 'E_SERVER_FAILURE', statusCode = 400) {
    this.code = code;
    this.message = message;
    this.statusCode = statusCode;
  }

  public static middleware = (
    err: Error,
    request: Request,
    response: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _: NextFunction,
  ): Response => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        code: err.code,
        message: err.message,
      });
    }

    // eslint-disable-next-line no-console
    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  };
}

export { AppError };
