import mongoose from 'mongoose';

const { Schema } = mongoose;

export const userScheme = new Schema({
    name: {
        type: String,
        default: '',
    },
    lastName: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        default: null,
    },
    password: {
        type: String,
        required: true,
    },
    articles: [{
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }]
});
