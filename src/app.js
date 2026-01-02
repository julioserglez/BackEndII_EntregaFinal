import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './config/connectiondb.js';
import usersRouter from './routes/usersRouter.js';
import productsRouter from './routes/productsRouter.js';

import businessRouter from './routes/businessRouter.js';
import ordersRouter from './routes/ordersRouter.js';

dotenv.config({path: '.env'});
const app = express();
const PORT = process.env.PORT||8080;

connectDB()
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users',usersRouter);
app.use('/api/products',productsRouter);
app.use('/api/business',businessRouter);
app.use('/api/orders',ordersRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
