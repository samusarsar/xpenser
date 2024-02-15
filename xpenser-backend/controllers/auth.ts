import User from '../models/User';
import bcrypt from 'bcryptjs';
import { createError } from '../error';
import jwt from 'jsonwebtoken';
import { IRequest, UserDocument } from '../common/types';
import { NextFunction, Response } from 'express';
import { connectDB } from '..';

export const signUp = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    connectDB();

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send('User Created!');
  } catch (error) {
    next(error);
  }
};

export const signIn = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    connectDB();

    const user = (await User.findOne({
      username: req.body.username,
    })) as UserDocument;

    if (!user) return next(createError(404, 'User not found!'));

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password,
    );

    if (!isPasswordValid) return next(createError(400, 'Wrong Credentials'));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);
    const { password, ...other } = user._doc;

    res
      .cookie('access_token', token, {
        httpOnly: false,
      })
      .status(200)
      .json(other);
  } catch (error) {
    next(error);
  }
};
