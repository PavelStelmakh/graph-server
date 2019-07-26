import Apollo from 'apollo-server-express';

const { gql } = Apollo;

export const authorType = gql`
    extend type Query {
        users: [Author!]
    }

    type Author {
        id: ID!
        name: String
        lastName: String
        email: String!
        birthday: String
        password: String!
    }
`;
