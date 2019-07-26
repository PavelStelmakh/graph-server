import { queryType } from './query.js';
import { authorType } from './author/index.js';

export const typeDefs = [queryType, authorType];
export const resolvers = {
    Query: {
        users: async (parent, args, { db }) => {
            return await db.User.find().populate('articles');
        }
    },
};