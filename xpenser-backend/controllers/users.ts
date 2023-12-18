import { NextFunction, Response } from 'express';
import { IRequest } from '../common/types';
import { createError } from '../error';
import User from '../models/User';

export const getUser = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...other } = user;

    res.status(200).json(other);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true },
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, 'You can update only your account!'));
  }
};

export const deleteUser = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.status(200).json('User has been deleted...');
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, 'You can delete only your account!'));
  }
};
