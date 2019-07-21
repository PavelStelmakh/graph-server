import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
} from 'graphql';

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
