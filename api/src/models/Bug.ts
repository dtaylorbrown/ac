import mongoose, { Schema, Document } from 'mongoose';

const BugSchema: Schema = new Schema({
    name: { type: String, required: true },
    icon: { type: String },
    price: { type: Number },
    location: { type: String },
    time: { type: String },
    northern_hemisphere: { type: [String] },
    southern_hemisphere: { type: [String] },
});

export interface IBug extends Document {
    name: string;
    icon: string;
    price: number;
    location: string;
    northern_hemisphere: [string],
    southern_hemisphere: [string],
}

const BugModel = mongoose.model<IBug>('Bug', BugSchema);

export default BugModel;
