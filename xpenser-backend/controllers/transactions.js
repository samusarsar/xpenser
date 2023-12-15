import Transaction from '../models/Transaction.js';
import User from '../models/User.js';
import { createError } from '../error.js';

export const getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await User.findOne({
      email: req.body.email,
    });
    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};

export const addTransaction = async (req, res, next) => {
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

export const deleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { transactionId } = req.body;

    const transactionExists = Transaction.findOne({
      transactionId,
    });

    if (!transactionExists)
      return next(createError(404, 'Transaction not found!'));

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $pull: {
          transactions: {
            transactionId,
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
