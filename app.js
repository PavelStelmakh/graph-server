import express from 'express';
import mongoose from 'mongoose';
import { GraphQLSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

import { PORT, NODE_ENV } from './config.js';
import { mutationType, queryType } from './types/index.js';

const app = express();

// const { buildSchema } = Graphql;

// const schema = buildSchema(`
//     union SearchResult = Author | Director
//     type Query {
//         users: [Author!]
//         user(id: ID!): SearchResult
//     }
//     input UserInput {
//         name: String
//         lastName: String
//         email: String!
//         birthday: String
//         password: String!
//     }
//     input ArticleInput {
//         title: String
//         description: String
//         createdBy: ID!
//     }
//     interface IUser {
//         id: ID!
//         name: String
//         lastName: String
//         email: String!
//         birthday: String
//         password: String!
//         articles: [Article!]
//     }
//     type Author implements IUser {
//         id: ID!
//         name: String
//         lastName: String
//         email: String!
//         birthday: String
//         password: String!
//         articles: [Article!]
//     }
//     type Director implements IUser {
//         id: ID!
//         name: String
//         lastName: String
//         email: String!
//         birthday: String
//         password: String!
//         articles: [Article!]
//         money: Int!
//     }
//     type Article {
//         id: ID!
//         title: String
//         description: String
//         createdBy: ID!
//     }
//     type Mutation {
//         createUser(user: UserInput): Author
//         createArticle(article: ArticleInput): Article
//     }
// `);

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
});

// const rootValue = {
//     // users: async () => {
//     //     return await User.find().populate('articles');
//     // },
//     // user: async ({ id }) => {
//     //     const u = await User.findById(id);
//     //     if (id === '5d330a9a2eb9dc093089ec2e') {
//     //         return { ...u, money: 1000 }
//     //     }
//     //     return u;
//     // },
//     // createUser: async ({ user }) => {
//     //     const createdUser = new User(user);
//     //     await createdUser.save();
//     //     return createdUser;
//     // },
//     // createArticle: async ({ article }) => {
//     //     const createdArticle = new Article(article);
//     //     await createdArticle.save();
//     //     const author = await User.findById(article.createdBy);
//     //     author.articles.push(createdArticle);
//     //     await author.save();
//     //     return createdArticle;
//     // },
//     // SearchResult: {
//     //     __resolveType: parent => {
//     //         if (parent.money) {
//     //             return 'Director';                
//     //         }

//     //         return 'Author';
//     //     }
//     // },
// };

// graphql(scheme, '{ hello }', root).then(response => console.log(response.data));

// app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema,
    // rootValue,
    graphiql: true,
}));

mongoose.connect('mongodb://localhost:27017/db_graphql', { useNewUrlParser: true })
    .then(() => {
        // app.locals.db = db;
        // app.locals.db = {
        //     User: mongoose.model("User", userScheme),
        //     Article: mongoose.model("Article", articleScheme),
        // };
        return app.listen(PORT);
    })
    .then(() => console.log(`server listening port ${PORT} with ${NODE_ENV} settings`))
    .catch(err => {
        mongoose.disconnect();
        console.error(err);
    });

process.on('SIGINT', () => {
    mongoose.disconnect();
    process.exit();
});
