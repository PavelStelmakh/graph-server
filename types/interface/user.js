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
        id: new GraphQLNonNull(GraphQLID),
        name: GraphQLString,
        lastName: GraphQLString,
        email: new GraphQLNonNull(GraphQLString),
        birthday: GraphQLString,
        password: new GraphQLNonNull(GraphQLString),
        articles: new GraphQLList(new GraphQLNonNull(articleType)),
    },
    resolveType: parent => {
        if (parent.money) {
            return directorType;                
        }

        return authorType;
    }
});
