import app from './app';
import dotenv from 'dotenv';
dotenv.config(); //.env 設定

const PORT = process.env.PORT;

const handleListening = () => console.log(`Listening on: localhost:${PORT}`);

app.listen(PORT, handleListening);
