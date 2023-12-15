import express from 'express';
import { verifyToken } from '../verifyToken.js';
import { deleteUser, getUser, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/:id', getUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);

export default router;
