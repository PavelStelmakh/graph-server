import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
} from 'graphql';

export const articleType = new GraphQLObjectType({
    name: 'Article',
    fields: {
        id: new GraphQLNonNull(GraphQLID),
        title: {
            type: GraphQLString,
            defaultValue: '',
        },
        description: {
            type: GraphQLString,
            defaultValue: '',
        },
        createdBy: new GraphQLNonNull(GraphQLID),
    },
});
