import express from 'express';
import mongoose from 'mongoose';
import Graphql from 'graphql';
import graphqlHTTP from 'express-graphql';

import { PORT, NODE_ENV } from './config.js';
import { userScheme, articleScheme } from './schemes/index.js';

const app = express();

const { buildSchema } = Graphql;
  
const User = mongoose.model('User', userScheme);
const Article = mongoose.model('Article', articleScheme); // при выборке  .populate('createdBy')

const db = {
    User,
    Article,
};

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const rootValue = {
    hello: () => 'hello world',
};

// graphql(scheme, '{ hello }', root).then(response => console.log(response.data));

// app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}));

mongoose.connect('mongodb://localhost:27017/db_graphql', { useNewUrlParser: true })
    .then(() => {
        app.locals.db = db;
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
