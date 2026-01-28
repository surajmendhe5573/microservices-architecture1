// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

import routes from './routes/index.js';
import notFound from './middlewares/default/notFound.js';
import errorHandler from './middlewares/default/errorHandler.js';
import { responseFormatter } from './middlewares/default/responseFormater.js';

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(compression());

app.use(responseFormatter);

app.get('/', (req, res) => {
  res.send('API Gateway is running 🚀');
});

app.use('/api/v1', routes);

app.use(notFound);
app.use(errorHandler);

export default app;
