import mongoose from 'mongoose';
import { Request, Response } from 'express';
import BugModel from '../models/Bug';

export const getBugs = async (req: Request, res: Response) => {
    const bugs = await BugModel.find();
    res.json(bugs);
}

export const addBug = async (req: Request, res: Response) => {
    const bug = await (new BugModel(req.body)).save();
    res.json(bug);
};
