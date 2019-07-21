import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
} from 'graphql';

import { userInterface } from './interface/index.js';
import { authorType } from './common/index.js';
import { User } from '../db/index.js';

export const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: new GraphQLList(new GraphQLNonNull(authorType)),
            resolve: async () => {
                return await User.find().populate('articles');
            },
        },
        user: {
            type: userInterface,
            args: {
                id: new GraphQLNonNull(GraphQLID)
            },
            resolve: async (_, { id }) => {
                const u = await User.findById(id);
                if (id === '5d330a9a2eb9dc093089ec2e') {
                    return { ...u, money: 1000 }
                }
                return u;
            },
        }
    },
});
