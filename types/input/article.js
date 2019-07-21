import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
} from 'graphql';

export const articleInput = new GraphQLInputObjectType({
    name: 'ArticleInput',
    fields: {
        title: GraphQLString,
        description: GraphQLString,
        createdBy: new GraphQLNonNull(GraphQLID),
    },
});
