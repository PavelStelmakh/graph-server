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
        title: GraphQLString,
        description: GraphQLString,
        createdBy: new GraphQLNonNull(GraphQLID),
    },
});
