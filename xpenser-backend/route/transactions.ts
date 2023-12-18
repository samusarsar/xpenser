import express from 'express';
import {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
} from '../controllers/transactions';
import { verifyToken } from '../verifyToken';

const router = express.Router();

router.get('/', verifyToken, getAllTransactions);
router.post('/add', verifyToken, addTransaction);
router.delete('/delete', verifyToken, deleteTransaction);

export default router;
