import mongoose, { Document, Schema } from 'mongoose';

interface IScore extends Document {
    team1: string;
    team2: string;
    score1: number;
    score2: number;
}

const ScoreSchema: Schema = new Schema({
    team1: { type: String, required: true },
    team2: { type: String, required: true },
    score1: { type: Number, default: 0 },
    score2: { type: Number, default: 0 },
});

export default mongoose.model<IScore>('Score', ScoreSchema);
