import express from 'express';
// mongoose

import { PORT, NODE_ENV } from './config.js';

const app = express();

app.listen(PORT, (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log(`server listening port ${PORT} with ${NODE_ENV} settings`);    
})
