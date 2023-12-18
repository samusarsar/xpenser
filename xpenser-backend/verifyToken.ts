import jwt, { JwtPayload, VerifyErrors, VerifyOptions } from 'jsonwebtoken';
import { createError } from './error';
import { NextFunction, Response } from 'express';
import { IRequest } from './common/types';

export const verifyToken = (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.access_token;

  if (!token) next(createError(401, 'You are not authenticated!'));

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    ((err: VerifyErrors, decodedUser: JwtPayload) => {
      if (err) next(createError(403, 'Token is not valid!'));

      req.user = decodedUser;
      next();
    }) as VerifyOptions,
  );
};
