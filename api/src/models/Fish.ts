import mongoose, { Schema, Document } from 'mongoose';

const FishSchema: Schema = new Schema({
    name: { type: String, required: true },
    icon: { type: String },
    price: { type: Number },
    location: { type: String },
    time: { type: String },
    northern_hemisphere: { type: [String] },
    southern_hemisphere: { type: [String] },
});

export interface IFish extends Document {
    name: string;
    icon: string;
    price: number;
    location: string;
    northern_hemisphere: [string],
    southern_hemisphere: [string],
}

export default mongoose.model<IFish>('Fish', FishSchema);
