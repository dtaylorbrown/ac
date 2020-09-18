import express from 'express';
import { rootHandler, helloHandler } from './handlers';
import router from './routes';
import bodyParser from 'body-parser';

const app = express();

//middlewares
app.use(bodyParser.json());

// routers
app.get('/', rootHandler);
app.use('/', router);

module.exports = app;
