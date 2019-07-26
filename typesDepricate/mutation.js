import GraphQL from 'graphql';

import { authorType, articleType } from './common/index.js';
import { userInput, articleInput } from './input/index.js'
import { User, Article } from '../db/index.js';

const {
    GraphQLObjectType,
} = GraphQL;

export const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: authorType,
            args: {
                user: { type: userInput },
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
                article: { type: articleInput },
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
