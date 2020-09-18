import mongoose from 'mongoose';
import { Request, Response } from 'express';
import IslanderModel from '../models/Islander';

export const getIslanders = async (req: Request, res: Response) => {
    const islander = await IslanderModel.find();
    res.json(islander);
};

export const addIslander = async (req: Request, res: Response) => {
    const islander = await (new IslanderModel(req.body)).save();
    res.json(islander);
};
