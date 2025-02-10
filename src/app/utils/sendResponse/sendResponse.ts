import { Response } from "express";

type TSendData<T> = {
  message: string;
  status: number;
  data?: T;
};

export const sendResponse = <T>(res: Response, data: TSendData<T>) => {
  res.status(data.status).json({
    message: data.message,
    status: data.status,
    data: data.data || null,
  });
};
