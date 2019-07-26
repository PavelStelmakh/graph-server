import GraphQL from 'graphql';

import { userInterface } from './interface/index.js';
import { authorType } from './common/index.js';
import { User } from '../db/index.js';

const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
} = GraphQL;

export const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: GraphQLList(GraphQLNonNull(authorType)),
            resolve: async () => {
                return await User.find().populate('articles');
            },
        },
        user: {
            type: userInterface,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve: async (_, { id }) => {
                const u = await User.findById(id).populate('articles');
                if (id === '5d330a9a2eb9dc093089ec2e') {
                    return Object.assign(u, { money: 1000 });
                }
                return u;
            },
        }
    },
});
