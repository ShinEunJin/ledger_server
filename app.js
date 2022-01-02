import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';

import routes from './router/routes';
import ledgerRouter from './router/ledgerRouter';

const app = express();

if (process.env.NODE_ENV === 'production') {
  dotenv.config({path: path.join(__dirname, './.env')});
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({path: path.join(__dirname, './.env.development')});
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use(routes.ledger, ledgerRouter);

export default app;
