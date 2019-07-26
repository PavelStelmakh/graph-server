import GraphQL from 'graphql';

import { articleType, authorType, directorType } from '../common/index.js';

const {
    GraphQLInterfaceType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList,
} = GraphQL;

export const userInterface = new GraphQLInterfaceType({
    name: 'User',
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLNonNull(GraphQLString) },
        birthday: { type: GraphQLString },
        password: { type: GraphQLNonNull(GraphQLString) },
        articles: { type: GraphQLList(GraphQLNonNull(articleType)) },
    },
    resolveType: parent => {
        if (parent.money) {
            return directorType;                
        }

        return authorType;
    }
});
