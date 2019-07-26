import Apollo from 'apollo-server-express';

const { gql } = Apollo;

export const User = gql`
    interface User {
        id: ID!
        name: String
        lastName: String
        email: String!
        birthday: String
        password: String!
        articles: [Article!]
    }

    input UserInput {
        name: String
        lastName: String
        email: String!
        birthday: String
        password: String!
    }
`;
