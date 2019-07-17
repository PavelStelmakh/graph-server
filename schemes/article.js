import mongoose from 'mongoose';

const { Schema } = mongoose;

export const articleScheme = new Schema({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});
