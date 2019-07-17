import express from 'express';
import mongoose from 'mongoose';

import { PORT, NODE_ENV } from './config.js';
import { userScheme, articleScheme } from './schemes/index.js';

const app = express();
  
const User = mongoose.model("User", userScheme);
const Article = mongoose.model("Article", articleScheme); // при выборке  .populate('createdBy')

const db = {
    User,
    Article,
};

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/db", { useNewUrlParser: true })
    .then(() => {
        app.locals.db = db;
        return app.listen(PORT);
    })
    .then(() => console.log(`server listening port ${PORT} with ${NODE_ENV} settings`))
    .catch(err => {
        mongoose.disconnect();
        console.error(err);
    });

process.on("SIGINT", () => {
    mongoose.disconnect();
    process.exit();
});
// app.listen(PORT, (err) => {
//     if (err) {
//         throw new Error(err);
//     }
//     console.log(`server listening port ${PORT} with ${NODE_ENV} settings`);    
// })
