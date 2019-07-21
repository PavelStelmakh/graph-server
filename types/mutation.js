import {
    GraphQLObjectType,
} from 'graphql';

import { userInput, authorType, articleInput, articleType } from './common/index.js';
import { User, Article } from '../db/index.js';

export const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: authorType,
            args: {
                user: userInput,
            },
            resolve: async (_, { user }) => {
                const createdUser = new User(user);
                await createdUser.save();
                return createdUser;
            },
        },
        createArticle: {
            type: articleType,
            args: {
                article: articleInput,
            },
            resolve: async (_, { article }) => {
                const createdArticle = new Article(article);
                await createdArticle.save();
                const author = await User.findById(article.createdBy);
                author.articles.push(createdArticle);
                await author.save();
                return createdArticle;
            },
        },
    },
});
