import Apollo from 'apollo-server-express';

const { gql } = Apollo;

export const mutationType = gql`
    type Mutation {
        _: Boolean
    }
`;
