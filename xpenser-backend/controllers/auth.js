import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../error.js';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send('User Created!');
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, 'User not found!'));

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password,
    );

    if (!isPasswordValid) return next(createError(400, 'Wrong Credentials'));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
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
