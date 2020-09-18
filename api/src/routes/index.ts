import express from 'express';
const router = express.Router();
import { getBugs, addBug } from '../controllers/bugController';
import { getIslanders, addIslander } from '../controllers/islanderController';

router.get('/bugs', getBugs);
router.post('/addBug', addBug);
router.get('/islanders', getIslanders);
router.post('/addIslander', addIslander);

export default router;
