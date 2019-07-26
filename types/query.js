import Apollo from 'apollo-server-express';

const { gql } = Apollo;

export const queryType = gql`
    type Query {
        _: Boolean
    }
`;
