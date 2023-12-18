import { NextFunction, Response } from 'express';
import { IRequest } from '../common/types';
import User from '../models/User';

export const getAllTransactions = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const transactions = await User.findOne({
      username: req.body.username,
    });
    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};

export const addTransaction = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.user;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $push: { transactions: req.body } },
      { new: true },
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteTransaction = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.user;
    const { transactionId } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $pull: {
          transactions: {
            _id: transactionId,
          },
        },
      },
      { new: true },
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
