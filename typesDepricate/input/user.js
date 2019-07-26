import GraphQL from 'graphql';

const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
} = GraphQL;

export const userInput = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLNonNull(GraphQLString) },
        birthday: { type: GraphQLString },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
});
