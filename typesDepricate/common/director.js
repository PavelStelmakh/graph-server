import GraphQL from 'graphql';

import { userInterface } from '../interface/index.js';
import { articleType } from './article.js';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
} = GraphQL;

export const directorType = new GraphQLObjectType({
    name: 'Director',
    interfaces: [userInterface],
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLNonNull(GraphQLString) },
        birthday: { type: GraphQLString },
        password: { type: GraphQLNonNull(GraphQLString) },
        articles: { type: GraphQLList(GraphQLNonNull(articleType)) },
        money: { type: GraphQLNonNull(GraphQLInt) },
    }
});
