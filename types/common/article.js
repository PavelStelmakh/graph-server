import GraphQL from 'graphql';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
} = GraphQL;

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
