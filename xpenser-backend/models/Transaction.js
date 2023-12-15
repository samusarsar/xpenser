import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
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

export default mongoose.model('Transaction', TransactionSchema);
