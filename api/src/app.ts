import express from 'express';
import { rootHandler } from './handlers';
import router from './routes';
import bodyParser from 'body-parser';
const cors = require('cors');

const app = express();

app.use(cors());
//middlewares
app.use(bodyParser.json());

// routers
app.get('/', rootHandler);
app.use('/', router);

module.exports = app;
