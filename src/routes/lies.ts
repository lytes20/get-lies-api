import express from 'express';
import { getLies } from '../controllers/lies';

const router = express.Router();
router.get('/', getLies);

export default router;
