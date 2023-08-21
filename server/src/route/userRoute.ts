import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController';
import UserValidation from '../middleware/UserValidation';


const router = express.Router();

router.post('/users', UserValidation, createUser);
router.get('/users', getAllUsers);

export default router;
