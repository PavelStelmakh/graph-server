import GraphQL from 'graphql';

const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
} = GraphQL;

export const userInput = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        name: GraphQLString,
        lastName: GraphQLString,
        email: new GraphQLNonNull(GraphQLString),
        birthday: GraphQLString,
        password: new GraphQLNonNull(GraphQLString),
    },
});
