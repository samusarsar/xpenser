import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface IError extends Error {
  status?: number;
}

export interface IRequest extends Request {
  user: JwtPayload;
  _doc: {};
}

export interface UserDocument {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  transactions: [];
  avatar: string;
  _doc?: any;
}
