import express from 'express';
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
