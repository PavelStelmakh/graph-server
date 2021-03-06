import express from 'express';
import mongoose from 'mongoose';
import Apollo from 'apollo-server-express';
import parser from 'body-parser';
import cors from 'cors';

import { PORT, NODE_ENV } from './config.js';
import { typeDefs, resolvers } from './types/index.js';
import * as db from './db/index.js';

const app = express();
const { ApolloServer } = Apollo;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { db },
    playground: {
        endpoint: '/graphql',        
        settings: {
            'editor.theme': 'dark',
        },        
    },
});

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
server.applyMiddleware({ app, path: '/graphql', cors: true });

mongoose.connect('mongodb://localhost:27017/db_graphql', { useNewUrlParser: true })
    .then(() => {
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
