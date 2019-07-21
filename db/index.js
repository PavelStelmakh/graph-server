import mongoose from 'mongoose';

import { userScheme, articleScheme } from './schemes/index.js';

export const User = mongoose.model('User', userScheme);
export const Article = mongoose.model('Article', articleScheme);
