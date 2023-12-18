import express from 'express';
import {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
} from '../controllers/transactions.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

router.get('/', verifyToken, getAllTransactions);
router.post('/add', verifyToken, addTransaction);
router.delete('/delete', verifyToken, deleteTransaction);

export default router;
