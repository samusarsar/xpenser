import mongoose from 'mongoose';

const TransactionSubSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    transactions: {
      type: [TransactionSubSchema],
      default: [],
    },
    avatar: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', UserSchema);
