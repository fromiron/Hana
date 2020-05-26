import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config(); //.env 設定
import helmet from 'helmet';
import routes from './routes';
import globalRouter from './routers/globalRouter';
import bodyParser from 'body-parser';
import multer from 'multer';
const uploadData = multer();

const app = express();

app.use(helmet()); //セキュリティー
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use(uploadData.array()); //form data使用のためのmulter part

app.set('views', path.join(__dirname, 'views')); //pug view engine設定、及びパス指定
app.set('view engine', 'pug');

app.use(routes.home, globalRouter);

export default app;
