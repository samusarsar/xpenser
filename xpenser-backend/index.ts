import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoutes from './route/users';
import authRoutes from './route/auth';
import transactionsRoutes from './route/transactions';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { IError } from './common/types';

const app = express();
dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION_STRING as string)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
    });
};

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/transactions', transactionsRoutes);

app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8080, () => {
  connectDB();
  console.log('Server is running on port 8080');
});
