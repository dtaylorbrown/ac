import express from 'express';
const router = express.Router();
import { getBugs, addBug, getBugsCollection } from '../controllers/bugController';
import { getFish, addFish } from '../controllers/fishController';
import { getIslanders, addIslander } from '../controllers/islanderController';

router.get('/bugs', getBugs);
router.post('/addBug', addBug);
router.post('/getBugsCollection', getBugsCollection);
router.get('/fish', getFish);
router.post('/addFish', addFish);
router.get('/islanders', getIslanders);
router.post('/addIslander', addIslander);

export default router;
