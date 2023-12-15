import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoutes from './route/users.js';
import authRoutes from './route/auth.js';
import transactionsRoutes from './route/transactions.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
    });
};

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/games', transactionsRoutes);

app.use((err, req, res, next) => {
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
