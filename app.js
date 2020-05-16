import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config(); //.env 設定
import helmet from 'helmet';
import routes from './routes';
import globalRouter from './routers/globalRouter';

const app = express();

app.use(helmet()); //セキュリティー

app.set('views', path.join(__dirname, 'views')); //pug view engine設定、及びパス指定
app.set('view engine', 'pug');

app.use(routes.home, globalRouter);

export default app;
