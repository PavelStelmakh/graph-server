import Apollo from 'apollo-server-express';

const { gql } = Apollo;

export const userType = gql`
    extend type Query {
        users: [Author!]
        user(id: ID!): User
    }

    extend type Mutation {
        createUser(user: UserInput!): Author!
        createArticle(article: ArticleInput!): Article!
    }

    type Author implements User {
        id: ID!
        name: String
        lastName: String
        email: String!
        birthday: String
        password: String!
        articles: [Article!]
    }

    type Director implements User {
        id: ID!
        name: String
        lastName: String
        email: String!
        birthday: String
        password: String!
        articles: [Article!]
        money: Int!
    }

    input ArticleInput {
        title: String
        description: String
        createdBy: ID!
    }
`;
