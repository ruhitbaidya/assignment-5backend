import { NextFunction, Request, Response } from "express";

export const globalErrorHandel = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = err.message;
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    status: status,
    message: error,
  });
};
