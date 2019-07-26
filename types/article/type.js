import Apollo from 'apollo-server-express';

const { gql } = Apollo;

export const articleType = gql`
    type Article {
        id: ID!
        title: String
        description: String
        createdBy: ID!
    }
`;
