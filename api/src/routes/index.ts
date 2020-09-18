import express from 'express';
const router = express.Router();
import { getBugs, addBug } from '../controllers/bugController';

router.get('/bugs', getBugs);
router.post('/addBug', addBug);

export default router;
