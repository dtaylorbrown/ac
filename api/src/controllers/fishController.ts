import mongoose from 'mongoose';
import { Request, Response } from 'express';
import FishModel from '../models/Fish';

export const getFish = async (req: Request, res: Response) => {
    const fish = await FishModel.find();
    res.json(fish);
}

export const addFish = async (req: Request, res: Response) => {
    const fish = await (new FishModel(req.body)).save();
    res.json(fish);
};
