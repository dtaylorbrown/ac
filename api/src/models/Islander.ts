import mongoose, { Schema, Document } from 'mongoose';

const IslanderSchema: Schema = new Schema({
    name: { type: String, required: true },
    bugs: { type: [String] }
})

export interface IIslander extends Document {
    name: string;
    bugs: [string];
}

const IslanderModel = mongoose.model<IIslander>('Islander', IslanderSchema);

export default IslanderModel;
