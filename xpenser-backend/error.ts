import { IError } from './common/types';

export const createError = (status: number, message: string) => {
  const err = new Error() as IError;

  err.status = status;
  err.message = message;
  return err;
};
