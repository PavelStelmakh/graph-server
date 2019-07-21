import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList,
} from 'graphql';

import { userInterface } from '../interface/index.js';

export const authorType = new GraphQLObjectType({
    name: 'Author',
    interfaces: [userInterface],
    fields: {
        id: new GraphQLNonNull(GraphQLID),
        name: GraphQLString,
        lastName: GraphQLString,
        email: new GraphQLNonNull(GraphQLString),
        birthday: GraphQLString,
        password: new GraphQLNonNull(GraphQLString),
        articles: new GraphQLList(new GraphQLNonNull(articleType)),
    }
});
