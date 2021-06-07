import express from 'express';
import { addEmail } from '../controllers/underProgressPage.js';

const router = express.Router();

router.post('/addEmail', addEmail);

export default router;