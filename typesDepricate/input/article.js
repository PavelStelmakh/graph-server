import GraphQL from 'graphql';

const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
} = GraphQL;

export const articleInput = new GraphQLInputObjectType({
    name: 'ArticleInput',
    fields: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        createdBy: { type: GraphQLNonNull(GraphQLID) },
    },
});
